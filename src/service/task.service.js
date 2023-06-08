const { getAllTasksDB, createTaskDB, updateTaskDB, getTaskByIdDB, deleteTaskDB, patchTaskDB } = require('../repository/task.repository');
const ExceptionType = require('../exceptions/exceptions');

async function getAllTasks() {
  const data = await getAllTasksDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASKS_NOT_FOUND);
  return data;
}

async function createTask(task, user_id) {
  const data = await createTaskDB(task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_POST_TASK_NOT_CREATED);

  return data;
}

async function updateTask(id, task, user_id) {
  const data = await updateTaskDB(id, task, user_id);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_TASK_NOT_UPDATED);

  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET_TASK_NOT_FOUND);

  return data;
}

async function patchTask(id, taskData) {
  const data = await patchTaskDB(id, taskData);
  if (!data.length) throw new Error(ExceptionType.DB_PATCH_TASK_NOT_PATCHED);

  return data;
}

async function deleteTask(id) {
  const data = await deleteTaskDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_TASK_NOT_DELETED);

  return data;
}

module.exports = { getAllTasks, createTask, updateTask, getTaskById, deleteTask, patchTask };
