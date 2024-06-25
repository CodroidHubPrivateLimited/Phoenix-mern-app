const { AdminUser } = require("../../02-models/auth/01-adminUserSchema");
const CreateAdminUser = async (req, res) => {
    console.log(req.body)

  // try {
  //   const { email } = req.body;
  //   const FoundUser = await AdminUser.findOne({
  //     email: req.body.email,
  //   });
  //   if (FoundUser) {
  //     return res.status(400).json({ msg: "user already exists" });
  //   } else {
  //     const data = await AdminUser.create(req.body);
  //     if (data) {
  //       res.status(200).json({ msg: "user created successfully", email });
  //     } else {
  //       res.status(403).json({ msg: "user not created" });
  //     }
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ msg: " server error" });
  // }
};
exports.CreateAdminUser = CreateAdminUser
