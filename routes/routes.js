const express = require('express')
const router = express.Router()

// Import controllers
const itemController = require('../controllers/itemController')

// Routes
router.get('/items', itemController.getItems)
router.post('/items', itemController.addItem)
router.delete('/items/:id', itemController.deleteItem)

module.exports = router
