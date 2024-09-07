const jwt = require('jsonwebtoken');
const secretKey = "querty!@$";

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secretKey); // Token expires in 1 hour
}

function getUser(token) {
    if (!token) return null;
    
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        console.error("Invalid or expired token:", err.message);
        return null;
    }
}

module.exports = { setUser, getUser };
