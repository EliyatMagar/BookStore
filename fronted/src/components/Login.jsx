import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

export default function Login() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  
    console.log(watch("example")) // watch input value by passing the name of it
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2
            "
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
         
          <h3 className="font-bold text-lg">Login</h3>
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
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
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
              {/* errors will return when field validation fails  */}
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}

          </div>

          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 rounded px-3 py-1 text-white hover:bg-pink-700 duration-300">
              Login
            </button>
            <p>
              Not Registered?
              <Link
                to="/signup"
                className="text-blue-500 underline cursor-pointer"
              >
                SignUp Now
              </Link>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
 