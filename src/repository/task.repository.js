const pool = require('../db');

async function getAllTasksDB() {
  const client = await pool.connect();

  const sql = 'select * from tasks';
  const data = (await client.query(sql)).rows;

  return data;
}

async function createTaskDB(task, user_id) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sql = 'insert into tasks (task, user_id) values ($1, $2) returning *';
    const data = (await client.query(sql, [task, user_id])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`createTaskDB: ${error.message}`);
    return [];
  }
}

async function updateTaskDB(id, task, user_id) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sql = 'update tasks set task = $1, user_id = $2 where id = $3 returning *';
    const data = (await client.query(sql, [task, user_id, id])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`updateTaskDB: ${error.message}`);
    return [];
  }
}

async function getTaskByIdDB(id) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sql = 'select * from tasks where id = $1';
    const data = (await client.query(sql, [id])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`getTaskByIdDB: ${error.message}`);
    return [];
  }
}

module.exports = { getAllTasksDB, createTaskDB, updateTaskDB, getTaskByIdDB };
