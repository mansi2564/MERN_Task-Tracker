import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

import API from "../services/api";

import Sidebar from "../components/common/Sidebar";

import GreetingCard from "../components/dashboard/GreetingCard";

import StatsCard from "../components/dashboard/StatsCard";

import ProgressCard from "../components/dashboard/ProgressCard";

import UpcomingTasks from "../components/dashboard/UpcomingTasks";

import {

FaTasks,

FaCheckCircle,

FaClock,

FaExclamationTriangle

} from "react-icons/fa";

function Dashboard(){

const [tasks,setTasks]=useState([]);

const [loading,setLoading]=useState(true);

const fetchTasks=async()=>{

try{

const res=await API.get("/tasks");

setTasks(res.data);

}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};

useEffect(()=>{

fetchTasks();

},[]);

const totalTasks=tasks.length;

const completedTasks=tasks.filter(

task=>task.status==="Completed"

).length;

const pendingTasks=tasks.filter(

task=>task.status==="Pending"

).length;

const highPriority=tasks.filter(

task=>task.priority==="High"

).length;

if(loading){

return(

<div className="text-center mt-5">

<div className="spinner-border text-primary"></div>

<h5 className="mt-3">

Loading Dashboard...

</h5>

</div>

);

}

return(

<div className="d-flex">

<Sidebar/>

<div

className="container-fluid p-4"

style={{

background:"#F5F7FB",

minHeight:"100vh"

}}

>

<GreetingCard/>

<div className="row">

<StatsCard

title="Total Tasks"

value={totalTasks}

color="primary"

icon={<FaTasks/>}

/>

<StatsCard

title="Completed"

value={completedTasks}

color="success"

icon={<FaCheckCircle/>}

/>

<StatsCard

title="Pending"

value={pendingTasks}

color="warning"

icon={<FaClock/>}

/>

<StatsCard

title="High Priority"

value={highPriority}

color="danger"

icon={<FaExclamationTriangle/>}

/>

</div>

<div className="row">

<div className="col-lg-7">

<ProgressCard

tasks={tasks}

/>

</div>

<div className="col-lg-5">

<UpcomingTasks

tasks={tasks}

/>

</div>

</div>

<div className="card shadow rounded-4 border-0 p-4 mt-4">

<h3>

Recent Tasks

</h3>

<table className="table mt-3">

<thead>

<tr>

<th>Title</th>

<th>Category</th>

<th>Status</th>

<th>Priority</th>

<th>Due Date</th>

</tr>

</thead>

<tbody>

{

tasks.slice(0,5).map(task=>(

<tr key={task._id}>

<td>

{task.title}

</td>

<td>

{task.category}

</td>

<td>

<span

className={`badge ${

task.status==="Completed"

?

"bg-success"

:

"bg-warning text-dark"

}`}

>

{task.status}

</span>

</td>

<td>

<span

className={`badge ${

task.priority==="High"

?

"bg-danger"

:

task.priority==="Medium"

?

"bg-primary"

:

"bg-secondary"

}`}

>

{task.priority}

</span>

</td>

<td>

{

task.dueDate

?

new Date(task.dueDate)

.toLocaleDateString()

:

"-"

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</div>

);

}

export default Dashboard;