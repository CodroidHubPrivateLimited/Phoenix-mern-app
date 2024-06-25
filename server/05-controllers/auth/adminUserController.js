const AdminUser = require("../../02-models/auth/01-adminUser-Schema")

const CreateAdminUser = async (req, res) => {
    // fetch from db 
    // send data to frontend
    try {
        // email we get from the frontend in req
        const { email } = req.body

        // before creating a new user, check if there is a user in the DB with the same
        const foundUser = await AdminUser.findOne({email: req.body.email})
        if(foundUser){
              res.status(404).json({
                msg : "Email exists"
              })
        } else {
           const data = await AdminUser.create(req.body)
           if (data){
            res.status(200).json({
                msg: "User registered",
                email
            })
           }else {
            res.status(403).json({
                msg: "User redistation failed."
            })
        }
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "Server error"
        })
    }
}
exports.CreateAdminUser = CreateAdminUser