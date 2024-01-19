const express = require('express');
const TicketController = require('../controllers/ticketController');

const router = express.Router();

router.get('/tickets', TicketController.getTickets);
router.post('/tickets', TicketController.createTicket);
router.get('/tickets/:id', TicketController.showTicket);
router.put('/tickets/:id', TicketController.updateTicket);
router.delete('/tickets/:id', TicketController.deleteTicket);


module.exports = router;