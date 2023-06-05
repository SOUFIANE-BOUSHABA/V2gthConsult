// import donenv
require('dotenv').config()
// ipmort express deb
var express = require('express');

var bodyParser = require('body-parser');
 
// create app
var app = express();

const mongoose = require("mongoose");

// import dep Body parser
const methodOverride = require('method-override');

// import cros
const cors = require('cors');

// import values env
const { PORT } = require('./config');


// connecte with mongodb by mongoose
mongoose.connect('mongodb://localhost:27017/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=> {
    console.log('Database Local connected');
})
.catch((err) => {
    console.log(err.message);
});



 //configure the app to use bodyParser() and cros and method request
 //configure the app to use bodyParser() and cros and method request
 var bodyParser = require('body-parser');            
 app.use(methodOverride('_method'));
 app.use(bodyParser.json({limit:'10000mb'})); 
 app.use(bodyParser.urlencoded({extended:true, limit:'1000mb'})); 
 app.use(cors());


// import tous les routes de Interlocuteur
const routerInterlocuteur = require('./routes/interlocuteur');

// pour les route
app.use('/api/interlocuteur', routerInterlocuteur);


// pour declanche le serveur
app.listen(PORT, async () => {
    console.log(`server runningin port ${PORT}`);
});

