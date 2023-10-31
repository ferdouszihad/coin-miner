import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animation from "../assets/lotties/Animation - 1698079529296.json";
const Login = () => {
  return (
    <div className="hero min-h-screen w-11/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center max-w-[700px] lg:text-left">
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="ms-8  mt-5 space-y-3">
            <h1 className="text-5xl font-bold  border-s-8 ps-4 border-blue-500">
              Login now!
            </h1>
            <p className="text-sm">
              New Here??{" "}
              <Link to={"/register"} className="text-blue-500 underline">
                Join with us{" "}
              </Link>{" "}
            </p>
          </div>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
