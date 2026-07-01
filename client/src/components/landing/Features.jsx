import {
  FaTasks,
  FaChartPie,
  FaLock,
  FaCloud
} from "react-icons/fa";

function Features() {

  const features = [

    {
      icon: <FaTasks size={40} />,
      title: "Task Management",
      text: "Manage daily work efficiently."
    },

    {
      icon: <FaChartPie size={40} />,
      title: "Analytics",
      text: "Track productivity with charts."
    },

    {
      icon: <FaLock size={40} />,
      title: "Secure Login",
      text: "JWT Authentication."
    },

    {
      icon: <FaCloud size={40} />,
      title: "Cloud Storage",
      text: "Access tasks anywhere."
    }

  ];

  return (

    <section
      className="container py-5"
      id="features"
    >

      <h2 className="text-center mb-5">
        Why Choose TaskFlow Pro?
      </h2>

      <div className="row">

        {
          features.map((feature, index) => (

            <div
              key={index}
              className="col-md-3"
            >

              <div className="card shadow p-4 text-center h-100">

                <div className="text-primary mb-3">
                  {feature.icon}
                </div>

                <h5>{feature.title}</h5>

                <p>{feature.text}</p>

              </div>

            </div>

          ))
        }

      </div>

    </section>

  );

}

export default Features;