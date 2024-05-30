import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast'

export default function SignUp() {
  const location =useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname|| "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup Succesfully');
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error" + error.response.data.message);
        }
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-4">
        <div className="modal-box w-[500px]">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="space-y-3 mt-2">
              <span>Full Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullName"
                className="w-full rounded-md py-2 outline-none border"
                {...register("fullname", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="space-y-3 mt-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md py-2 outline-none border"
                {...register("email", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="space-y-3 mt-4">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-md py-2 outline-none border"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p className="text-xl">
                Have account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
