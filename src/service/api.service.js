const bcrypt = require('bcrypt');
const { createUserDB, getUserByEmailDB } = require('../repository/api.repository');

const saltround = 10;

async function createUser(name, surname, email, pwd) {
  const foundUser = await getUserByEmailDB(email);

  if (foundUser.length) throw new Error('user exists');

  const hashedPassword = await bcrypt.hash(pwd, saltround);

  const data = await createUserDB(name, surname, email, hashedPassword);

  if (!data.length) throw new Error('user not created');

  return data;
}

async function authorizationUser(email, pwd) {
  const findUser = await getUserByEmailDB(email);

  if (!findUser.length) throw new Error('user not found');

  const bool = await bcrypt.compare(pwd, findUser[0].pwd);

  if (!bool) throw new Error("password doesn't match");

  return findUser;
}

module.exports = { createUser, authorizationUser };
