function FilterBar({

    status,

    setStatus,

    priority,

    setPriority

}) {

    return (

        <div className="row">

            <div className="col-md-6">

                <select
                    className="form-select"
                    value={status}
                    onChange={(e)=>
                        setStatus(e.target.value)
                    }
                >

                    <option value="All">
                        All Status
                    </option>

                    <option value="Pending">
                        Pending
                    </option>

                    <option value="Completed">
                        Completed
                    </option>

                </select>

            </div>

            <div className="col-md-6">

                <select
                    className="form-select"
                    value={priority}
                    onChange={(e)=>
                        setPriority(e.target.value)
                    }
                >

                    <option value="All">
                        All Priority
                    </option>

                    <option value="High">
                        High
                    </option>

                    <option value="Medium">
                        Medium
                    </option>

                    <option value="Low">
                        Low
                    </option>

                </select>

            </div>

        </div>

    );

}

export default FilterBar;