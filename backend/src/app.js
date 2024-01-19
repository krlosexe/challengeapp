const express = require('express');
const ticketRoutes = require('./routes/ticketRoutes');

const { connectToDatabase } = require('./database');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(express.json());
app.use('/api', ticketRoutes);

app.get('/', (req, res) => {
  res.send('Hello doublevpartners!');
});


/*

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

*/

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
