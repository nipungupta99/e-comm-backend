const express = require('express');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');

mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log('listening on port ' + port);
})


