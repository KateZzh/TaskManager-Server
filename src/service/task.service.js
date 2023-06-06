const { getAllTasksDB, createTaskDB, updateTaskDB, getTaskByIdDB } = require('../repository/task.repository');

async function getAllTasks() {
  const data = await getAllTasksDB();
  if (!data.length) throw new Error('DB is empty');
  return data;
}

async function createTask(task, user_id) {
  const data = await createTaskDB(task, user_id);
  if (!data.length) throw new Error('task not created');

  return data;
}

async function updateTask(id, task, user_id) {
  const data = await updateTaskDB(id, task, user_id);
  if (!data.length) throw new Error('id not found');

  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDB(id);
  if (!data.length) throw new Error('id not found');

  return data;
}

module.exports = { getAllTasks, createTask, updateTask, getTaskById };