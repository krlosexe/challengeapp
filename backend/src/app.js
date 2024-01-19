const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


const ticketSchema = new mongoose.Schema({
  user: {type: String, required: true},
  status: {type: String,enum: ['abierto', 'cerrado'],default: 'abierto'}
},
{ 
  timestamps: true 
});


const Ticket = mongoose.model('Ticket', ticketSchema);

mongoose.connect('mongodb://mongo:27017/tickets', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Docker!');
});


app.post('/tickets', async (req, res) => {
  try {
    const newTicket = new Ticket({
      user: req.body.user,
    });

    await newTicket.save();

    res.status(201).json({ message: 'Ticket created successfully', ticket: newTicket });
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/tickets', async (req, res) => {
  try {

    const { user, status, page = 1, pageSize = 10 } = req.query;

    const filter = {};
    if (user) {
      filter.user = { $regex: `.*${user}.*`, $options: 'i' };
    }
    if (status) {
      filter.status = status;
    }

    const skipCount = (page - 1) * pageSize;

    const tickets = await Ticket.find(filter)
      .skip(skipCount)
      .limit(parseInt(pageSize, 10));


    const totalTickets = await Ticket.countDocuments(filter);
    const totalPages = Math.ceil(totalTickets / pageSize);


    const responseData = {
      current_page: parseInt(page, 10),
      data: tickets,
      first_page_url: `/tickets?page=1&pageSize=${pageSize}`,
      last_page_url: `/tickets?page=${totalPages}&pageSize=${pageSize}`,
      next_page_url: page < totalPages ? `/tickets?page=${parseInt(page, 10) + 1}&pageSize=${pageSize}` : null,
      path: `/tickets`,
      per_page: parseInt(pageSize, 10),
      prev_page_url: page > 1 ? `/tickets?page=${parseInt(page, 10) - 1}&pageSize=${pageSize}` : null,
      total: totalTickets
    };


    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error retrieving tickets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/tickets/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.status(200).json(ticket);
  } catch (error) {
    console.error('Error retrieving ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.put('/tickets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { user, status } = req.body;

    const existingTicket = await Ticket.findById(id);
    if (!existingTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    existingTicket.user = user || existingTicket.user;
    existingTicket.status = status || existingTicket.status;

    const updatedTicket = await existingTicket.save();

    res.status(200).json(updatedTicket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.delete('/tickets/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    console.error('Error deleting ticket:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
