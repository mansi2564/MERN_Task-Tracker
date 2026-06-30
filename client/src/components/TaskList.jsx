import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  fetchTasks,
  setEditingTask,
  search,
  statusFilter,
  priorityFilter,
  loading,
}) {

  if (loading) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      task.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  return (
    <div className="mt-4">

      <h3 className="mb-3">
        My Tasks ({filteredTasks.length})
      </h3>

      {filteredTasks.length === 0 ? (
        <div className="alert alert-info text-center">
          <h4>📭 No Tasks Found</h4>
          <p>Create a new task or change your filters.</p>
        </div>
      ) : (
        filteredTasks.map((task) => (
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