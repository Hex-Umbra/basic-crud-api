const express = require("express");
const usersModel = require("./userModel");
const routes = express.Router();

// ROOT //
routes.get("/", (req, res) => {
  res.send("Root url");
});
routes.get("/users", async (req, res) => {
  try {
    const users = await usersModel.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
// ALL USERS //
routes.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
// UPDATE USER//
routes.put("/users/:id/update", async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await usersModel.findByIdAndUpdate(id, req.body);
    if (!updateUser) {
      return res.status(404).json({ message: error.message });
    }
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: `Cet utilisateur n'est pas trouvable. ID: ${id}` });
  }
});
// DELETE USER //
routes.delete("/users/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await usersModel.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).json({ message: error.message });
    }
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: `Cet utilisateur n'est pas trouvable. ID: ${id}` });
  }
});
// CREATE USER //
routes.post("/makeUser", async (req, res) => {
  try {
    const user = await usersModel.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
