const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Create Task
exports.createTask = async (req, res) => {

  try {

    const {
      title,
      description,
      priority,
      status,
      category,
      dueDate,
    } = req.body;

    const task = await Task.create({

      title,

      description,

      priority,

      status,

      category,

      dueDate,

      user: req.user._id,

    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// Update Task
exports.updateTask = async (req, res) => {

  try {

    const task = await Task.findOne({

      _id: req.params.id,

      user: req.user._id,

    });

    if (!task) {

      return res.status(404).json({

        message: "Task not found",

      });

    }

    Object.assign(task, req.body);

    await task.save();

    res.json(task);

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};

// Delete Task
exports.deleteTask = async (req, res) => {

  try {

    const task = await Task.findOne({

      _id: req.params.id,

      user: req.user._id,

    });

    if (!task) {

      return res.status(404).json({

        message: "Task not found",

      });

    }

    await task.deleteOne();

    res.json({

      message: "Task Deleted Successfully",

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};