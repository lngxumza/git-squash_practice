const express = require('express');
const usersRouter = require('./routes/users');

const app = express();

// const hostname = '127.0.0.1';
const port = 3000;

// GET callback function returns a response message
app.get('/', (req, res) => {
   res.send('Hello World! Welcome to Node.js');
});

app.use('/users', usersRouter);

app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`);
});
