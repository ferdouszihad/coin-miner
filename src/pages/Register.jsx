import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import animation from "../assets/lotties/Animation - 1698080630949.json";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
// import axios from "axios";

const Register = () => {
  const { user, createUser, setUser, updateUser } = useAuth();
  // console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const avatar = [
    "https://img.icons8.com/?size=96&id=81120&format=png",
    "https://img.icons8.com/?size=96&id=80989&format=png",
    "https://img.icons8.com/?size=96&id=80615&format=png",
    "https://img.icons8.com/?size=96&id=81026&format=png",
    "https://img.icons8.com/?size=96&id=81802&format=png",
  ];
  const [activeAvatar, setActiveAvater] = useState(avatar[0]);
  // console.log(activeAvatar);
  //::todo:: Photo Upload system
  // // const [isNeedCustom, setIsNeedCustom] = useState(false);

  // const customUrlHandler = () => {
  //   setActiveAvater("");
  //   // setIsNeedCustom(true);
  // };
  const onSubmit = (data) => {
    console.log(data);
    createUser(data?.email, data?.pass)
      .then((res) => {
        console.log(res.user);
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...data, photoURL: activeAvatar }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data After inserting Database", data);
            setUser({ ...res.user, ...data });
          });
      })
      .catch((err) => {
        console.log(err);
        alert(err.code);
      });
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

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered"
                {...register("displayName", {
                  required: true,
                  pattern: /^[A-Za-z\s]{1,30}$/,
                })}
              />

              {errors.name && (
                <span className="text-sm text-red-600 p-2">
                  Dont use Numbers in name
                </span>
              )}
            </div>
            <div className="flex gap-5 flex-wrap">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number Here</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="input input-bordered"
                  {...register("phone", {
                    required: true,
                    // pattern: /^\d{11}$/,
                  })}
                />
                {errors.phone && (
                  <span className="text-sm text-red-600 p-2">
                    Insert a valid 11 digit number
                  </span>
                )}
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
                    src="https://img.icons8.com/?size=96&id=8ax09IWlr80n&format=png"
                    alt=""
                    className="max-w-[40px] "
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">NID Number</span>
              </label>
              <input
                type="number"
                placeholder="password"
                className="input input-bordered"
                {...register("nid", {
                  required: true,
                  //  pattern: /^\d{10}$/ ,
                })}
              />{" "}
              {errors.nid && (
                <span className="text-sm text-red-600 p-2">
                  Insert a Valid NID
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex flex-wrap gap-5">
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered "
                    {...register("pass", {
                      required: true,
                      pattern: /^(?=.*\d)(?=.*[A-Z]).{6,}$/,
                    })}
                  />
                  {errors.pass && (
                    <span className="text-sm block text-red-600 p-2">
                      One [A-Z] [0-9], minimum 6 character
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered"
                    {...register("passConfirm", { required: true })}
                  />
                </div>
              </div>

              <label className="label">
                {watch("pass") !== watch("passConfirm") ? (
                  <span className="text-sm block text-red-600 p-2">
                    Password Does Not Matched
                  </span>
                ) : (
                  ""
                )}
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
