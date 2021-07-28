const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Connecting to BD
mongoose.connect('mongodb+srv://meeseek:Admin123@rr-rh-admin.jsmbk.mongodb.net/Tasks?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(db => console.log("DB connected"))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function(){
    console.log('Servidor web en puerto 3000');
});

app.get('/', function(req, res) {  

    const task = mongoose.model('task',TaskSchema).find();
    res.send(task);

});