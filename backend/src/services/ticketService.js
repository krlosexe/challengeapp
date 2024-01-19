const Ticket = require('../models/ticketModel');

async function createTicket(userData) {
  const newTicket = new Ticket(userData);
  return newTicket.save();
}

async function getTickets(filter, page, pageSize) {
  const skipCount = (page - 1) * pageSize;
  const tickets = await Ticket.find(filter)
                        .skip(skipCount)
                        .limit(parseInt(pageSize, 10));

  const totalTickets = await Ticket.countDocuments(filter);
  
  return { tickets, totalTickets };
}

async function getTicket(id) {
  const ticket = await Ticket.findById(id);
  return ticket;
}


async function updateTicket(id, data) {

  const {user, status} = data;

  const existingTicket = await Ticket.findById(id);

  if (!existingTicket) {
    return false;
  }

  existingTicket.user = user || existingTicket.user;
  existingTicket.status = status || existingTicket.status;

  const updatedTicket = await existingTicket.save();

  
  return updatedTicket;
}


async function deleteTicket(id) {

  const deletedTicket = await Ticket.findByIdAndDelete(id);

  if (!deletedTicket) {
    return res.status(404).json({ error: 'Ticket not found' });
  }
  
  return deletedTicket;
}



module.exports = {
  createTicket,
  getTickets,
  getTicket,
  updateTicket,
  deleteTicket
};