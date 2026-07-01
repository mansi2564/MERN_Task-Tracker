import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();

  const { register } = useAuth();

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    password: "",

    confirmPassword: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      formData.password !== formData.confirmPassword
    ) {

      toast.error("Passwords do not match");

      return;

    }

    try {

      await register({

        name: formData.name,

        email: formData.email,

        password: formData.password,

      });

      toast.success("Registration Successful");

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );

    }

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">

              Create Account

            </h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                className="form-control mb-3"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <button className="btn btn-success w-100">

                Register

              </button>

            </form>

            <p className="text-center mt-3">

              Already have an account?

              <Link to="/login">
                {" "}Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;