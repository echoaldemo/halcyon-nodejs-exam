"use strict";
const Task = use("App/Models/Task");
class TaskController {
  async index({ response }) {
    let tasks = await Task.all();
    return response.json(tasks);
  }

  async store({ request, response }) {
    const taskInfo = request.only(["task_name", "task_status"]);
    const task = new Task();
    task.task_name = taskInfo.task_name;
    task.task_status = taskInfo.task_status;

    await task.save();

    return response.status(201).json(task);
  }

  async show({ params, response }) {
    const task = await Task.findOrFail(params.id);
    return response.json(task);
  }

  async update({ params, request, response }) {
    const taskInfo = request.only(["task_name", "task_status"]);
    const task = await Task.find(params.id);
    if (!task) {
      return response.status(404).json({ data: "Data not found!" });
    }
    if (!taskInfo.task_name) {
      return response.status(500);
    }
    task.task_name = taskInfo.task_name;
    task.task_status = taskInfo.task_status;

    await task.save();

    return response.status(200).json(task);
  }

  async delete({ params, response }) {
    const task = await Task.find(params.id);
    if (!task) {
      return response.status(404).json({ data: "Data not found!" });
    }

    await task.delete();

    return response.status(204).json({ status: "Task deleted!" });
  }
}

module.exports = TaskController;
