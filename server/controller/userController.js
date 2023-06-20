import User from "../model/userSchema.js";

// Creating new user
export const addUser = async (req, res) => {
  // storing data in a variable received from frontend (i.e, req.body)
  const userData = req.body;
  // creating a new document(i.e, a row) using schema and data received from frontend
  const newUser = new User(userData);
  try {
    // saving the newly created document(i.e, row) to database
    await newUser.save();
    res.status(202).json(newUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Getting all data of user
export const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(202).json(user);
  } catch (err) {
    res.status(404).json({ messgae: err.message });
  }
};

// Get a user by id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Updating the old user
export const updateUser = async (req, res) => {
  // storing data in a variable received from frontend (i.e, req.body)
  const userData = req.body;
  // creating a new document(i.e, a row) using schema and data(updated data) received from frontend
  const updateUser = new User(userData);
  try {
    // updating a user(row or collection) by giving passing parameter like id for fiter(i.e, for upadting the collection where id matches) and the updated data
    await User.updateOne({ _id: req.params.id }, updateUser);
    req.status(202).json(updateUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// deleting a user
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(202).json({ message: "User deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
