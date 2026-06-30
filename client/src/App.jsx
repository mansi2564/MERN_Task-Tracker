import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await API.get("/tasks");

      setTasks(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">

      <ToastContainer position="top-right" autoClose={2000} />

      <div className="card shadow p-4">

        <h2 className="text-center mb-4">
          📋 MERN Task Tracker
        </h2>

        <div className="row mb-4">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search Task"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="All">All Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

        </div>

        <TaskForm
          fetchTasks={fetchTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />

        <hr />

        <TaskList
          tasks={tasks}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
          search={search}
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          loading={loading}
        />

      </div>
    </div>
  );
}

export default App;