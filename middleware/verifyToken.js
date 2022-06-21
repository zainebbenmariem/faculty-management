const jwt = require("jsonwebtoken");
module.export = function (req,res,next) {
    const token = req.header("Authorization");
    if(!token) {
        return res.status(401).json("No token provided");
    }
    try {
        const verifiedUser = jwt.verify(token, "sdvnosvcnsoic");
        req.verifiedUser = verifiedUser;
        next();
    } catch (err) {
        res.status(403).json("Invalid token");
    }
};