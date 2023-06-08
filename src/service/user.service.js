const { getAllUsersDB, createUserDB, getUserByIdDB, updateUserDB, deleteUserDB, patchUserDB } = require('../repository/user.repository');
const ExceptionType = require('../exceptions/exceptions');

async function getAllUsers() {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_USERS_NOT_FOUND);
  return data;
}
async function createUser(name, surname, email, pwd) {
  const data = await createUserDB(name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_POST_USER_NOT_CREATED);
  return data;
}

async function getUserById(id) {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET_USER_NOT_FOUND);

  return data;
}

async function updateUser(id, name, surname, email, pwd) {
  const data = await updateUserDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_USER_NOT_UPDATED);

  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_USER_NOT_DELETED);

  return data;
}

async function patchUser(id, clientData) {
  const data = await patchUserDB(id, clientData);
  if (!data.length) throw new Error(ExceptionType.DB_PATCH_USER_NOT_PATCHED);

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
