const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.listen('3000', function(){
    console.log('Servidor web en puerto 3000');
});

app.get('/', function(req, res) {    

    res.send("Hellow world");

});