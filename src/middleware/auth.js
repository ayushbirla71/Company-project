const jwt=require('jsonwebtoken')
////////////////////////~Authentication~/////////////////////////
const Authentication = function (req, res, next) {
    try{
    let bearerToken = req.headers["authorization"]
    // console.log(req.headers)
    if (typeof bearerToken == "undefined") {
        return res.status(400).send({ status: false, message: "bearer token is missing" })
    }
    bearerToken = bearerToken.split(" ")[1]
    jwt.verify(bearerToken, "xyz",
        function (err, result) {
            if (err) return res.status(401).send({ status: false, message: err })
            else {
                req.userId = result.userId
                req.Usertype=result.type
                next()
            }
        }
    )
}
catch (err) {
    return res.status(500).send({ status: false, message: err.message })
}
}




////////////////////////////////////~Module~/////////////////////////////////////////
module.exports.Authentication = Authentication