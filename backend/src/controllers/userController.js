export const getUsers = (req, res) => {
  res.json({ message: "Users fetched" }); 
};

import { getAllUsers } from "../services/userService.js";

export const getUsers = (req, res) => {
  const users = getAllUsers();
  res.json(users);
};