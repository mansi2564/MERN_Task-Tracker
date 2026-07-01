import { useAuth } from "../../context/AuthContext";

function GreetingCard() {

    const { user } = useAuth();

    const hour = new Date().getHours();

    let greeting = "";

    if(hour < 12){

        greeting = "Good Morning ☀";

    }

    else if(hour < 18){

        greeting = "Good Afternoon 🌤";

    }

    else{

        greeting = "Good Evening 🌙";

    }

    return(

        <div className="card shadow border-0 rounded-4 p-4 mb-4">

            <h2>

                {greeting}

            </h2>

            <h3 className="fw-bold">

                {user?.user?.name}

            </h3>

            <p className="text-muted">

                Stay focused and complete your goals today 🚀

            </p>

        </div>

    );

}

export default GreetingCard;