const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  patchUser,
} = require("../service/user.service");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const data = await getAllUsers();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post("/", async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const clientData = req.body;
    const data = await patchUser(id, clientData);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = route;
