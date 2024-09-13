const Item = require('../models/item')

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find()

    res.status(200).json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Add an item
exports.addItem = async (req, res) => {
  const item = new Item({
    name: req.body.name,
  })

  try {
    const newItem = await item.save()
    res.status(201).json(newItem)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Item deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
