import API from "../services/api";
import { toast } from "react-toastify";

function TaskCard({ task, fetchTasks, setEditingTask }) {

  const deleteTask = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/tasks/${task._id}`);

      fetchTasks();

      toast.success("Task Deleted Successfully");

    } catch (error) {

      console.log(error);

      toast.error("Error deleting task");

    }

  };

  return (

    <div className="card shadow p-4 mb-3">

      <div className="d-flex justify-content-between">

        <h4>{task.title}</h4>

        <span
          className={`badge ${
            task.status === "Completed"
              ? "bg-success"
              : "bg-warning text-dark"
          }`}
        >
          {task.status}
        </span>

      </div>

      <p className="mt-2">{task.description}</p>

      <p>

        <strong>Priority : </strong>

        <span
          className={`badge ${
            task.priority === "High"
              ? "bg-danger"
              : task.priority === "Medium"
              ? "bg-primary"
              : "bg-secondary"
          }`}
        >
          {task.priority}
        </span>

      </p>

      <small className="text-muted">

        Created :

        {" "}

        {new Date(task.createdAt).toLocaleDateString()}

      </small>

      <div className="mt-3">

        <button
          className="btn btn-warning me-2"
          onClick={() => setEditingTask(task)}
        >
          ✏ Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={deleteTask}
        >
          🗑 Delete
        </button>

      </div>

    </div>

  );

}

export default TaskCard;