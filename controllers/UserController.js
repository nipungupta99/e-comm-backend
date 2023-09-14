const User = require("../models/userSchema");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(200).json({
      message: "User saved successfully",
      data: newUser,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error Saving User");
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  res.send("received");
};

exports.getUserProfile = async (req, res) => {
  const { userId } = req.body;
  try {
    let requiredUser = await User.findOne({ _id: userId });
    res.send(requiredUser);
  } catch (e) {
    console.log(e);
    res.send("Unable to find user");
  }
};

exports.updateUser = async (req, res) => {
    const { userId } = req.body;
    try {
        const updateResult = await User.updateOne(
            { _id: userId },
            { $set: { name: "new Name3" } }
        );

        console.log(updateResult)
        if (updateResult.modifiedCount === 1) {
            const updatedUserData = await User.findOne({ _id: userId });
            res.status(200).json({ message: "User Updated", data: updatedUserData });
        } else {

            res.status(404).json({ message: "User not found or not updated" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating user" });
    }
};
