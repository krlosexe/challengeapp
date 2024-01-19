const TicketService = require('../services/ticketService');
const paginationUtils = require('../utils/paginationUtils'); 

async function createTicket(req, res) {
  try {
    const newTicket = await TicketService.createTicket(req.body);
    res.status(201).json({ message: 'Ticket created successfully', ticket: newTicket });
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getTickets(req, res) {
  try {
    const { user, status, page = 1, pageSize = 10 } = req.query;
    
    const filter = {};
    if (user) {
      filter.user = { $regex: `.*${user}.*`, $options: 'i' };
    }
    if (status) {
      filter.status = status;
    }

    const { tickets, totalTickets } =  await TicketService.getTickets(filter, page, pageSize);
    
    const responseData = paginationUtils.generatePaginationResponse(page, pageSize, totalTickets, '/tickets');
    responseData.data = tickets;

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error retrieving tickets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function showTicket(req, res) {
  const { id } = req.params;

  try {
    const ticket = await TicketService.getTicket(id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.status(201).json(ticket);
  } catch (error) {
    console.error('Error showing ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



async function updateTicket(req, res) {
  try {

    const { id } = req.params;
    const data = req.body;

    const ticket = await TicketService.updateTicket(id, data);
    
    if(ticket){
      res.status(201).json(ticket);
    }else{
      res.status(403).json({ error: 'record no found' });
    }
    
  } catch (error) {
    console.error('Error update ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteTicket(req, res) {
  try {
    const { id } = req.params;
    await TicketService.deleteTicket(id);
    res.status(201).send();

  } catch (error) {
    console.error('Error delete ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


module.exports = {
  createTicket,
  getTickets,
  showTicket,
  updateTicket,
  deleteTicket
};
