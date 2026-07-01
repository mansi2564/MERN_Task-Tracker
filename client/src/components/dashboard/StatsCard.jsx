function StatsCard({

    title,

    value,

    color,

    icon

}){

    return(

        <div className="col-lg-3 col-md-6 mb-4">

            <div
            className={`card border-start border-5 border-${color} shadow-sm rounded-4 p-4 h-100`}
            >

                <div className="d-flex justify-content-between">

                    <div>

                        <h6 className="text-muted">

                            {title}

                        </h6>

                        <h2>

                            {value}

                        </h2>

                    </div>

                    <div
                    style={{
                        fontSize:"2rem"
                    }}
                    >

                        {icon}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StatsCard;