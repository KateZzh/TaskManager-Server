const { getAllUsersDB, createUserDB, getUserByIdDB, updateUserDB, deleteUserDB, patchUserDB } = require('../repository/user.repository');

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error('DB is empty');
  return data;
}
async function createUser(name, surname, email, pwd) {
  const data = await createUserDB(name, surname, email, pwd);
  if (!data.length) throw new Error('user not created');
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error('id not found');

  return data;
}

async function updateUser(id, name, surname, email, pwd) {
  const data = await updateUserDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error('id not found');

  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDB(id);
  if (!data.length) throw new Error('id not found');

  return data;
}

async function patchUser(id, clientData) {
  const data = await patchUserDB(id, clientData);
  if (!data.length) throw new Error('id not found');

  return data;
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  patchUser,
};
