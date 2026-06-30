import { useState, useEffect } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

function TaskForm({ fetchTasks, editingTask, setEditingTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
  });

  // Fill the form when Edit is clicked
  useEffect(() => {
    if (editingTask) {
      setTask({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        status: editingTask.status,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setTask({
      title: "",
      description: "",
      priority: "Medium",
      status: "Pending",
    });
    setEditingTask(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingTask) {
        // Update Task
        await API.put(`/tasks/${editingTask._id}`, task);
        toast.success("Task Updated Successfully");
      } else {
        // Add Task
        await API.post("/tasks", task);
        toast.success("Task Added Successfully");
      }

      resetForm();
      fetchTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form className="card shadow p-4" onSubmit={handleSubmit}>
      <h3 className="mb-3 text-center">
        {editingTask ? "Update Task" : "Add Task"}
      </h3>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        className="form-control mb-3"
        value={task.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Task Description"
        className="form-control mb-3"
        value={task.description}
        onChange={handleChange}
        required
      ></textarea>

      <select
        name="priority"
        className="form-select mb-3"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select
        name="status"
        className="form-select mb-3"
        value={task.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary w-100">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={resetForm}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;