const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Routes
const authRoute = require('./routes/authRoutes');
const clientRoute = require('./routes/clientRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const verifyJWT = require('./middlewares/verifyJWT');

// Middlewares
app.use(cors()); 
app.use(express.json());
app.use(cookieParser());


// Authentication Route
app.use("/api/auth", authRoute);

// Client Route 
app.use("/api/client", verifyJWT, clientRoute);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
