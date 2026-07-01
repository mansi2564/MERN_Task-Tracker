function TaskStats({ tasks }) {

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.status === "Completed"
    ).length;

    const pending = tasks.filter(
        task => task.status === "Pending"
    ).length;

    const highPriority = tasks.filter(
        task => task.priority === "High"
    ).length;

    const cards = [
        {
            title: "Total Tasks",
            value: total,
            color: "primary"
        },
        {
            title: "Completed",
            value: completed,
            color: "success"
        },
        {
            title: "Pending",
            value: pending,
            color: "warning"
        },
        {
            title: "High Priority",
            value: highPriority,
            color: "danger"
        }
    ];

    return (

        <div className="row mb-4">

            {
                cards.map((card, index) => (

                    <div
                        className="col-md-3 mb-3"
                        key={index}
                    >

                        <div
                            className={`card border-start border-5 border-${card.color} shadow p-3`}
                        >

                            <h6>{card.title}</h6>

                            <h2>{card.value}</h2>

                        </div>

                    </div>

                ))
            }

        </div>

    );

}

export default TaskStats;