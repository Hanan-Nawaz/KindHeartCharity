const mongoose = require('mongoose');

const BeneficiarySchema = new mongoose.Schema({
    volunteer_cnic: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    needs: {
        type: String,
        required: true
    },
    amount_needed: {
        type: Number,
        required: true
    },
    donor_cnic: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Beneficiary = mongoose.model("Beneficiary", BeneficiarySchema);
module.exports = Beneficiary;
