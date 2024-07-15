const express = require('express');

const router = express.Router();

// Controller
const { login } = require('../controllers/AuthControllers');

router.post("/", login);

module.exports = router;