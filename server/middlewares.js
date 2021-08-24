module.exports.isLoggedIn = (req, res, next) => {


    if (!req.isAuthenticated()) {
        res.status(403).json({"error":"User not logged in"})

    } else {
        next();
    }

}