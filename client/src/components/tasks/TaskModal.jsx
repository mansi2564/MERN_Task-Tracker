import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-toastify";

function TaskModal({
    show,
    handleClose,
    fetchTasks,
    editingTask
}) {

    const [task,setTask]=useState({

        title:"",

        description:"",

        category:"Study",

        priority:"Medium",

        status:"Pending",

        dueDate:""

    });

    useEffect(()=>{

        if(editingTask){

            setTask({

                title:editingTask.title,

                description:editingTask.description,

                category:editingTask.category,

                priority:editingTask.priority,

                status:editingTask.status,

                dueDate:editingTask.dueDate
                ? editingTask.dueDate.substring(0,10)
                :""

            });

        }

        else{

            setTask({

                title:"",

                description:"",

                category:"Study",

                priority:"Medium",

                status:"Pending",

                dueDate:""

            });

        }

    },[editingTask]);

    const handleChange=(e)=>{

        setTask({

            ...task,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            if(editingTask){

                await API.put(

                    `/tasks/${editingTask._id}`,

                    task

                );

                toast.success("Task Updated");

            }

            else{

                await API.post(

                    "/tasks",

                    task

                );

                toast.success("Task Added");

            }

            fetchTasks();

            handleClose();

        }

        catch(error){

            toast.error(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    };

    if(!show) return null;

    return(

<div
className="modal d-block"
style={{background:"rgba(0,0,0,.5)"}}
>

<div className="modal-dialog">

<div className="modal-content">

<div className="modal-header">

<h5>

{editingTask?"Edit Task":"Add Task"}

</h5>

<button
className="btn-close"
onClick={handleClose}
/>

</div>

<form onSubmit={handleSubmit}>

<div className="modal-body">

<input
className="form-control mb-3"
placeholder="Task Title"
name="title"
value={task.title}
onChange={handleChange}
required
/>

<textarea
className="form-control mb-3"
rows="3"
placeholder="Description"
name="description"
value={task.description}
onChange={handleChange}
required
/>

<select
className="form-select mb-3"
name="category"
value={task.category}
onChange={handleChange}
>

<option>Study</option>

<option>Work</option>

<option>Personal</option>

<option>Shopping</option>

<option>Health</option>

<option>Other</option>

</select>

<select
className="form-select mb-3"
name="priority"
value={task.priority}
onChange={handleChange}
>

<option>High</option>

<option>Medium</option>

<option>Low</option>

</select>

<select
className="form-select mb-3"
name="status"
value={task.status}
onChange={handleChange}
>

<option>Pending</option>

<option>Completed</option>

</select>

<input
type="date"
className="form-control"
name="dueDate"
value={task.dueDate}
onChange={handleChange}
/>

</div>

<div className="modal-footer">

<button
type="button"
className="btn btn-secondary"
onClick={handleClose}
>

Cancel

</button>

<button
type="submit"
className="btn btn-primary"
>

{editingTask?"Update":"Save Task"}

</button>

</div>

</form>

</div>

</div>

</div>

    );

}

export default TaskModal;