const express = require("express");
const Client = require("../models/Client");
const bcrypt = require('bcryptjs');


const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.json(clients);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getClientByID = async (req, res) => {
    try {
      const client = await Client.findByPk(req.params.id);
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
      res.json(client);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Internal server error' });
    }
};

const createClient = async (req, res) => {
    const { name, email, mobile_number, address, start_date, end_date, password } = req.body;
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    try {
      const newClient = await Client.create({
        name,
        email,
        mobile_number,
        address,
        start_date,
        end_date,
        password: hashedPassword,
      });
      res.json(newClient);
    } catch (err) {
      console.error(err.message);
      res.status(400).json({ message: 'Error creating client' });
    }
};

const updateClient = async (req, res) => {
    const { name, email, mobile_number, address, start_date, end_date, password } = req.body;
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    try {
      const client = await Client.findByPk(req.params.id);
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
  
      await client.update({
        name,
        email,
        mobile_number,
        address,
        start_date,
        end_date,
        password: hashedPassword,
      });
      res.json(client);
    } catch (err) {
      console.error(err.message);
      res.status(400).json({ message: 'Error updating client' });
    }
};

const deleteClient = async(req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
          return res.status(404).json({ message: 'Client not found' });
        }
        await client.destroy();
        console.log('Client data deleted!');
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal server error' });
      }
};

module.exports = {
    getAllClients,
    getClientByID,
    createClient,
    updateClient,
    deleteClient
}