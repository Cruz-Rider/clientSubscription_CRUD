const express = require('express');

const router = express.Router();

// Controller
const { getAllClients, getClientByID, createClient, updateClient, deleteClient} = require('../controllers/ClientControllers');

router
    .route("/")
    .get(getAllClients)
    .post(createClient);

router
    .route("/:id")
    .get(getClientByID)
    .put(updateClient)
    .delete(deleteClient);

module.exports = router;