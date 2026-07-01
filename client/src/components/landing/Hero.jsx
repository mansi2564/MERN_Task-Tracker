import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="container py-5">

      <div className="row align-items-center">

        <div className="col-lg-6">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-4 fw-bold"
          >
            Organize Your Work Like a Pro
          </motion.h1>

          <p className="lead mt-4">

            Manage your daily tasks,
            increase productivity,
            and achieve your goals with
            TaskFlow Pro.

          </p>

          <div className="mt-4">

            <Link
              className="btn btn-primary btn-lg me-3"
              to="/register"
            >
              Get Started
            </Link>

            <Link
              className="btn btn-outline-dark btn-lg"
              to="/login"
            >
              Login
            </Link>

          </div>

        </div>

        <div className="col-lg-6 text-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            className="img-fluid rounded"
            alt="Hero"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;