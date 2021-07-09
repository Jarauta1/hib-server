const bcrypt = require("bcrypt");

function encryption(req, res, next) {
    let user = req.body;
    user.passwordSignUp = bcrypt.hashSync(user.passwordSignUp, 10);
    req.body = user;
    next();
}

module.exports = encryption;