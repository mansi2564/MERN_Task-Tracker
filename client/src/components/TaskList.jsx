import TaskCard from "./TaskCard";

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  return (
    <div className="mt-4">
      <h3 className="mb-3">My Tasks</h3>

      {tasks.length === 0 ? (
        <div className="alert alert-info">
          No Tasks Found
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
            setEditingTask={setEditingTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;