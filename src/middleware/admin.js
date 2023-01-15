const Admin = async (req, res, next) => {
    try {
        let type = req.Usertype;
        console.log(type);
        if (type == "Admin") {
            next();
        } else {
            return res
                .status(400)
                .send({ status: false, message: "You are not a admin" });
        }
    } catch (error) {
        return res.status(500).send({ status: true, message: error.message });
    }
};

module.exports = { Admin };
