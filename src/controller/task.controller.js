const express = require('express');
const { getAllTasks, createTask, updateTask, getTaskById } = require('../service/task.service');
const buildResponse = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const data = await getAllTasks();
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);
    buildResponse(res, 201, data);
  } catch (error) {
    buildResponse(res, 405, error.message);
  }
});

route.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { task, user_id } = req.body;
    const data = await updateTask(id, task, user_id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getTaskById(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
