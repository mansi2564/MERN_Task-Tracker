function ProgressCard({

    tasks

}){

    const total = tasks.length;

    const completed = tasks.filter(

        task=>task.status==="Completed"

    ).length;

    const progress =

    total===0

    ?0

    :Math.round(

        (completed/total)*100

    );

    return(

<div className="card shadow rounded-4 border-0 p-4 mb-4">

<h4>

Overall Productivity

</h4>

<div className="progress my-3" style={{height:"25px"}}>

<div

className="progress-bar progress-bar-striped progress-bar-animated"

style={{

width:`${progress}%`

}}

>

{progress}%

</div>

</div>

</div>

    );

}

export default ProgressCard;