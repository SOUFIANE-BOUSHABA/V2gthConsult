const Interlocuteur = require("../models/Interlocuteur");
const bcrypt = require("bcrypt");
const jwt = require("../util/jwt")
 


exports.login = async(req, res) => {

    const { email , password } = await req.body;

    // if(email !== null) {
    //     res.status(500).json( { msg : "Email est requis" })
    // }

    // if(password !== null) {
    //     res.status(500).json( { msg : "mote de passe est requis" })
    // }

    const interlocuteur = await Interlocuteur.findOne({ email : email });

    if(interlocuteur == null) {
        res.status(500).json( { msg : "votre compte n'existe pas" })
    }

    if(interlocuteur != null) {
        const match = bcrypt.compareSync(password, interlocuteur.password);
        if(match) {
            if(interlocuteur.status == true) {

                const accesToken = jwt.generateToken(interlocuteur.email, password);
                const accesRefrechToken = jwt.generateRefrechToken(interlocuteur.email, password);

                res.status(200).json({ accesToken : accesToken , accesRefrechToken : accesRefrechToken , flag : true });

                    
            } else {
                return res.status(401).json({ eroor : "veuillez contactez l admin"})
            }
        } else {
            return res.status(401).json({ eroor : "votre mote de passe incorrct"})
        }
    }


}

exports.admission = async (req, res) => {

    try {
        const { nom, prenom, password, email } = await req.body
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // ORM
        await Interlocuteur.create({
            nom : nom,
            prenom : prenom,
            password : hash,
            email : email
        })
        .then(() => {
            res.status(201).json({ msg : "created with succes" , flag : true});
        })
        .catch((error) => {
            res.status(500).json({ msg : error.message  , flag : false });
        });

    } catch(error) {
        res.status(500).json({ msg : error.message  , flag : false });
    }


}

exports.devis = (req, res) => {
    res.status(200).json({
        prenom : "achraf",
        nom : "achraf",
        age : 26,
        function : "Software Dev"
    });
}