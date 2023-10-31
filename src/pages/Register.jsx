import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animation from "../assets/lotties/Animation - 1698080630949.json";
import { useState } from "react";
const Register = () => {
  const avatar = [
    "https://img.icons8.com/?size=96&id=81120&format=png",
    "https://img.icons8.com/?size=96&id=80989&format=png",
    "https://img.icons8.com/?size=96&id=80615&format=png",
    "https://img.icons8.com/?size=96&id=81026&format=png",
    "https://img.icons8.com/?size=96&id=81802&format=png",
  ];
  const [activeAvatar, setActiveAvater] = useState(avatar[0]);
  console.log(activeAvatar);

  const [isNeedCustom, setIsNeedCustom] = useState(false);

  const customUrlHandler = () => {
    setActiveAvater("");
    setIsNeedCustom(true);
  };

  return (
    <div className="hero  w-11/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center max-w-[800px] lg:text-left">
          <Lottie animationData={animation} loop={true} />
        </div>

        <div className="card w-full shadow-2xl bg-base-100">
          <div className="ms-8  mt-5 space-y-3">
            <h1 className="text-5xl font-bold  border-s-8 ps-4 border-blue-500">
              Join with us
            </h1>
            <p className="text-sm">
              Allready have an account??{" "}
              <Link to={"/login"} className="text-blue-500 underline">
                Log-in now{" "}
              </Link>{" "}
            </p>
          </div>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex gap-5 flex-wrap">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="Enter Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number Here</span>
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="Enter Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose an Avatar</span>
              </label>
              <div className="flex flex-wrap gap-2 ">
                {avatar.map((imgLink, index) => (
                  <div key={index}>
                    <img
                      onClick={() => {
                        setActiveAvater(avatar[index]);
                      }}
                      src={`${imgLink}`}
                      className={`max-w-[60px] cursor-pointer ${
                        activeAvatar == imgLink &&
                        "border-green-500 p-px  border-2 rounded-full"
                      }`}
                      alt=""
                    />
                  </div>
                ))}
                <div className="rounded-full cursor-pointer  bg-base-200 flex items-center justify-center w-16 h-16">
                  <img
                    onClick={customUrlHandler}
                    src="https://img.icons8.com/?size=96&id=8ax09IWlr80n&format=png"
                    alt=""
                    className="max-w-[40px] "
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex flex-wrap gap-5">
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />{" "}
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>

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
export default Register;
