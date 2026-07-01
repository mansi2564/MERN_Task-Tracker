function UpcomingTasks({

    tasks

}){

    const upcoming =

    tasks

    .filter(task=>task.dueDate)

    .sort(

        (a,b)=>

        new Date(a.dueDate)-

        new Date(b.dueDate)

    )

    .slice(0,5);

    return(

<div className="card shadow rounded-4 border-0 p-4">

<h4>

Upcoming Tasks

</h4>

{

upcoming.length===0

?

<p>

No upcoming tasks

</p>

:

upcoming.map(task=>(

<div

key={task._id}

className="border-bottom py-2"

>

<strong>

{task.title}

</strong>

<br/>

<small>

📅

{

new Date(task.dueDate)

.toLocaleDateString()

}

</small>

</div>

))

}

</div>

    );

}

export default UpcomingTasks;