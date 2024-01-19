const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  user: { type: String, required: true },
  status: { type: String, enum: ['abierto', 'cerrado'], default: 'abierto' }
}, {
  timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;