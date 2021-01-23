const jwt = require('jsonwebtoken');
const authenticate = (req,res,next)=>{ 
    try {
        const token = req.headers.authorization;
        console.log(req.headers.authorization, 'Mon token');
        const decode = jwt.verify(token,'VerySecretValue')
        req.locataire  = decode
        next();
    } catch (error) {
        res.status(500).json({
            message: "Auhtentification failed"
        })
    }
}

module.exports = authenticate;