const express = require('express');
const path = require('path');
const nomeApp = 'transicao-penal';
const app = express();
 
// app.use(express.static(`$/dist/$`));
app.use(express.static(__dirname + '/dist/'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);