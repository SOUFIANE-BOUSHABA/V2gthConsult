const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config")

exports.generateToken = (email, password) => {
    var accesToken = jwt.sign(
        { email: email, password : password },
        JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
    
      return accesToken;
}

exports.generateRefrechToken = (email, password) => {
    var accesRefrechToken = jwt.sign(
        { email: email, password : password },
        JWT_SECRET,
        {
          expiresIn: "356d",
        }
      );
    
      return accesRefrechToken;
}

exports.verifiyToken = (req, res, next) => {
try {
    const accessToken = req.headers.authorization.split(' ')[1]
    if(!accessToken) {
        return res.status(500).send({ error : "access token exp"})
    }
    var decode = jwt.verify(accessToken, JWT_SECRET);
    req.interlocuteur = {
        email : decode.email,
        password : decode.password
    }
    next();

}catch(error) {
    res.status(401).json({ error : error.message });
}

}