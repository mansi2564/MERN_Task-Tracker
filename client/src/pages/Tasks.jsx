import { useEffect, useState } from "react";
import Sidebar from "../components/common/Sidebar";

import API from "../services/api";

import TaskStats from "../components/tasks/TaskStats";
import SearchBar from "../components/tasks/SearchBar";
import FilterBar from "../components/tasks/FilterBar";
import TaskModal from "../components/tasks/TaskModal";
import TaskCard from "../components/tasks/TaskCard";

function Tasks() {

    const [tasks, setTasks] = useState([]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All");

    const [priority, setPriority] = useState("All");

    const [showModal,setShowModal]=useState(false);

    const [editingTask,setEditingTask]=useState(null);

    const fetchTasks = async () => {

        try{

            const res=await API.get("/tasks");

            setTasks(res.data);

        }

        catch(error){

            console.log(error);

        }

    };

    useEffect(()=>{

        fetchTasks();

    },[]);

    const filteredTasks=tasks.filter(task=>{

        const searchMatch=
        task.title.toLowerCase().includes(search.toLowerCase());

        const statusMatch=
        status==="All"||task.status===status;

        const priorityMatch=
        priority==="All"||task.priority===priority;

        return(
            searchMatch &&
            statusMatch &&
            priorityMatch
        );

    });

    return(

        <div className="d-flex">

            <Sidebar/>

            <div className="container-fluid p-4">

                <h2 className="mb-4">

                    📋 Task Management

                </h2>

                <TaskStats tasks={tasks}/>

                <div className="row mb-4">

                    <div className="col-md-6">

                        <SearchBar

                            search={search}

                            setSearch={setSearch}

                        />

                    </div>

                    <div className="col-md-6">

                        <FilterBar

                            status={status}

                            setStatus={setStatus}

                            priority={priority}

                            setPriority={setPriority}

                        />

                    </div>

                </div>

                <button
                className="btn btn-primary mb-4"
                onClick={()=>{

                setEditingTask(null);

                setShowModal(true);

                }}
                >

                + Add Task

                </button>

                <div className="row">

                    {

                    filteredTasks.map((task)=>(

                    <div

                    className="col-lg-4 col-md-6 mb-4"

                    key={task._id}

                    >

                    <TaskCard

                    task={task}

                    fetchTasks={fetchTasks}

                    setEditingTask={setEditingTask}

                    setShowModal={setShowModal}

                    />

                    </div>

                    ))

                    }

                </div>
            </div>

            <TaskModal

            show={showModal}

            handleClose={()=>setShowModal(false)}

            fetchTasks={fetchTasks}

            editingTask={editingTask}

            />

        </div>

    );

}

export default Tasks;