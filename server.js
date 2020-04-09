const express = require('express');
const app = express();
const http = require('http').createServer(app);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.get('/', async (req, res) => {
    res.send('<h1>Server Started Successfully </h1>');
});

const PORT = process.env.PORT || 3001;
const MONGO_CONNECTION = config.get('db.host') + config.get('db.name');


const server = async () => {
    try {
        await mongoose.connect(MONGO_CONNECTION, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        http.listen(PORT, () => {
            console.log('Server started on ', PORT);
        });
    } catch (error) {
        console.log('Error', error);
    }
};

server();