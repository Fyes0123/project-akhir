let users = [
  { id: 1, name: "Tora" }
];

export const getAllUsers = () => {
  return users;
};

export const addUser = (name) => {
  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);
  return newUser;
}; //For storing data in memory