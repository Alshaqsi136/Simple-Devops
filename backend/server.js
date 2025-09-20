const express = require('express')
const cors = require('cors');
const app = express();
const port = 3001
const userRoutes = require('./routes/user');
app.use(cors({
  origin: 'http://localhost:3000', // Allow only frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
