const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.static('views'));

app.use('/', userRoutes);

//get index.html

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});