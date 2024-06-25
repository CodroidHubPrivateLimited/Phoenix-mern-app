const {JakeSchema} = require('../../02-models/auth/JakeSchema')

const JakeCOntroller = async (req,res) => {
    try{
        const {msg} = req.body
        
        console.log(msg)
        if (msg){
            return res.status(200).json(
                {msg:"nice msg"}
            )
        }
    }catch(err){
        console.log("server error")
    }
}

module.exports = {JakeCOntroller};