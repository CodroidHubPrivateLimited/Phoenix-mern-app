const AdminUser = require("../../02-models/auth/01-adminUserSchema")

const CreateAdminUser = async (req, res) => {

    try {
        // email we get from the frontend in req
        const { email } = req.body
        //before creating a new user, check if there is a user in the DB with the same email
        const foundUser = await AdminUser.findOne({ email: req.body.email })
        // if found tell the user in response, can't sign up os email exists
        if (foundUser) {
            res.status(404).json({
                msg: "Email exists"
            })
        } else {
            // if the email is not found in DB, create a user using that email
            const data = await AdminUser.create(req.body)
            if (data) {
                res.status(200).json({
                    msg: "User registered",
                    email
                })
                // if no response from DB, send error res to teh front end
            } else {
                res.status(403).json({
                    msg: "User registration failed."
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