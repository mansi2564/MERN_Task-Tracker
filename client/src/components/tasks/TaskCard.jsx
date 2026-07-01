import API from "../../services/api";
import { toast } from "react-toastify";

function TaskCard({
  task,
  fetchTasks,
  setEditingTask,
  setShowModal,
}) {

  const deleteTask = async () => {

    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/tasks/${task._id}`);

      toast.success("Task Deleted");

      fetchTasks();

    } catch (error) {

      toast.error("Delete Failed");

    }

  };

  const markCompleted = async () => {

    try {

      await API.put(`/tasks/${task._id}`,{

        ...task,

        status:"Completed"

      });

      toast.success("Task Completed");

      fetchTasks();

    }

    catch(error){

      toast.error("Update Failed");

    }

  };

  return (

<div className="card shadow-sm border-0 rounded-4 p-4 h-100 task-card">

<h4 className="fw-bold">

{task.title}

</h4>

<p className="text-muted">

{task.description}

</p>

<div className="mb-3">

<span className="badge bg-info me-2">

🏷 {task.category}

</span>

<span

className={`badge me-2 ${

task.priority==="High"

?"bg-danger"

:task.priority==="Medium"

?"bg-warning text-dark"

:"bg-success"

}`}

>

{task.priority}

</span>

<span

className={`badge ${

task.status==="Completed"

?"bg-success"

:"bg-secondary"

}`}

>

{task.status}

</span>

</div>

<p className="small">

📅

{

task.dueDate

?

new Date(task.dueDate)

.toLocaleDateString()

:

"No Due Date"

}

</p>

<div className="d-flex gap-2">

<button

className="btn btn-warning btn-sm"

onClick={()=>{

setEditingTask(task);

setShowModal(true);

}}

>

✏ Edit

</button>

<button

className="btn btn-success btn-sm"

onClick={markCompleted}

>

✔ Complete

</button>

<button

className="btn btn-danger btn-sm"

onClick={deleteTask}

>

🗑 Delete

</button>

</div>

</div>

  );

}

export default TaskCard;