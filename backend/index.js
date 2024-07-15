const express = require('express');
const cors = require('cors');

// Routes
const authRoute = require('./routes/authRoutes');
const clientRoute = require('./routes/clientRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors()); 
app.use(express.json());

// Authentication Route
app.use("/api/auth", authRoute);


// Client Route 
app.use("/api/client", clientRoute);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
