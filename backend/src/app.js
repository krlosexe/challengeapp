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


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
