import { getAllUsers, addUser } from "../services/userService.js";
//Controller logic
export const getUsers = (req, res) => {
  const users = getAllUsers();
  res.json(users);
};

export const createUser = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "No body sent" });
  }

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newUser = addUser(name);
  res.status(201).json(newUser);
};