const express = require('express');
const router = express.Router();
const Beneficiary = require('../modals/Beneficiary');

// Create Beneficiary
router.post('/create', async (req, res) => {
  try {
    const {
      volunteer_cnic,
      name,
      cnic,
      needs,
      amount_needed,
      donor_cnic,
      status
    } = req.body;

    const newBeneficiary = new Beneficiary({
      volunteer_cnic,
      name,
      cnic,
      needs,
      amount_needed,
      donor_cnic,
      status
    });

    console.log(newBeneficiary)
    await newBeneficiary.save();
    res.status(201).json({ message: 'Beneficiary created successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Could not create beneficiary' });
  }
});

// Get Beneficiary by ID
router.get('/view/id/:id', async (req, res) => {
  try {
    const beneficiaryId = req.params.id;

    if (!beneficiaryId) {
      return res.status(400).json({ error: 'Beneficiary ID is required' });
    }

    const beneficiary = await Beneficiary.findById(beneficiaryId);

    if (!beneficiary) {
      return res.status(404).json({ error: 'Beneficiary not found' });
    }

    res.status(200).json({ beneficiary });
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch beneficiary' });
  }
});


// Get Beneficiaries by Volunteer CNIC
router.get('/view/:cnic', async (req, res) => {
  try {
    const  volunteer_cnic  = req.params.cnic;

    if (!volunteer_cnic) {
      return res.status(400).json({ error: 'Volunteer CNIC is required' });
    }

    const beneficiaries = await Beneficiary.find({ volunteer_cnic });
    res.status(200).json({ beneficiaries });
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch beneficiaries' });
  }
});

// Get Beneficiaries with Status 'Paid'
router.get('/paid/:cnic', async (req, res) => {
  const cnic = req.params.cnic;
    try {
      const paidBeneficiaries = await Beneficiary.find({ status: 'Donated', donor_cnic: cnic });
      res.status(200).json({ beneficiaries: paidBeneficiaries });
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch paid beneficiaries' });
    }
  });
  
  // Get Beneficiaries with Status 'Pending'
  router.get('/pending', async (req, res) => {
    try {
      const pendingBeneficiaries = await Beneficiary.find({ status: 'pending' });
      res.status(200).json({ beneficiaries: pendingBeneficiaries });
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch pending beneficiaries' });
    }
  });  

// Update endpoint for donation status
router.put('/donated/:beneficiaryId', async (req, res) => {
  const { donor_cnic, status } = req.body;
  const { beneficiaryId } = req.params;

  try {
    // Find the beneficiary by ID
    const beneficiary = await Beneficiary.findById(beneficiaryId);

    if (!beneficiary) {
      return res.status(404).json({ error: 'Beneficiary not found' });
    }

    // Update donor_cnic and status fields
    beneficiary.donor_cnic = donor_cnic;
    beneficiary.status = status;

    // Save the updated beneficiary
    await beneficiary.save();

    res.status(200).json({ message: 'Beneficiary updated successfully', updatedBeneficiary: beneficiary });
  } catch (error) {
    res.status(500).json({ error: 'Could not update beneficiary' });
  }
});

// Update endpoint for beneficiary
router.put('/edit/:beneficiaryId', async (req, res) => {
  const { name, cnic, needs, amount_needed } = req.body;
  const { beneficiaryId } = req.params;

  try {
    // Find the beneficiary by ID
    const beneficiary = await Beneficiary.findById(beneficiaryId);

    if (!beneficiary) {
      return res.status(404).json({ error: 'Beneficiary not found' });
    }

    // Update specific fields
    if (name) beneficiary.name = name;
    if (cnic) beneficiary.cnic = cnic;
    if (needs) beneficiary.needs = needs;
    if (amount_needed) beneficiary.amount_needed = amount_needed;

    // Save the updated beneficiary
    await beneficiary.save();

    res.status(200).json({ message: 'Beneficiary updated successfully', updatedBeneficiary: beneficiary });
  } catch (error) {
    res.status(500).json({ error: 'Could not update beneficiary' });
  }
});


module.exports = router;
