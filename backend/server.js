const express = require('express');
const app = express();
const cors = require('cors');
const connectToMongoDB = require('./db');

// Connect to MongoDB
try {
  connectToMongoDB();
} catch (error) {
  console.error('Failed to connect to MongoDB:', error.message);
}

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3001', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));

// Middleware
app.use(express.json());

// Routes
try {
  const authRoutes = require('./routes/auth'); 
  const userProfileRoutes = require('./routes/userprofile');
  const beneficiaryRoutes = require('./routes/beneficiary');
  const stripeRoutes = require('./routes/payment');

  app.use('/auth', authRoutes); 
  app.use('/user', userProfileRoutes); 
  app.use('/beneficiary', beneficiaryRoutes); 
  app.use('/payment', stripeRoutes); 

} catch (error) {
  console.error('Error loading routes:', error.message);
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
