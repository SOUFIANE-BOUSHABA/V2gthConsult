// import dep
const mongoose = require("mongoose");
// create Schema Interlocuteur ant typage
const InterlocuteurSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : false,
        trim : false
    },
    prenom: {
        type : String,
        required : false,
        trim : false
    } ,
    email: {
        type : String,
        required : false,
        trim : true
    },
    password : {
        type : String,
        required : false
    },
    pass : {
        type : String,
        required : false,
        trim : false
    },
    telephone: {
        type : Number,
        required : false,
        trim : true
    },
    status : {
        type : Boolean,
        required : false,
        default : false
    },
    send : {
        type : Boolean,
        required : false,
        default : false
    },
    date : {
        type : Date,
        required : false,
        default : new Date()
    },

    clientId : {
        type : mongoose.Schema.Types.ObjectId, ref : "Client",
        required: false
    },

    Interlocuteur : {
        type :Array,
        required : false
    },

    fonction : {
        type : String,
        required: false
    }
});

const Interlocuteur = mongoose.model("Interlocuteur", InterlocuteurSchema);
module.exports = Interlocuteur;