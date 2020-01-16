const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();
app.use('/api/auth',require('./routes/auth.route'));
const PORT = config.get('port') || 5000;
const URI = config.get('mongoUri');

async function start (){
    try {
        await  mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        app.listen(PORT,()=>{console.log(`server has been started on port#${PORT}`)});
    } catch (e) {
        console.log(`Error from start server`,e.message);
        process.exit(1)
    }
};
start();