const {AdminUser} = require('../../02-models/auth/01-adminUserSchema')

const CreateAdminUser = async (req, res) => {
    try{
        const { email } = req.body;
        console.log(email)
        const foundUser = await AdminUser.findOne({ email: email });
        if (foundUser){
            return res.status(400).json(
                {msg: "User already exists"}
            )
        }else{
            console.log(req.body)
            console.log("---------------------")
            const data = await AdminUser.create(req.body)
            if (data){
                return res.status(200).json(
                    {msg: "Admin user created"}
                            )
            }else{
                return res.status(500).json(
                    {msg: "Server error"}
                )
            }
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json(
            {msg: "Server error joj"}
        )
    }

}
module.exports = {CreateAdminUser};