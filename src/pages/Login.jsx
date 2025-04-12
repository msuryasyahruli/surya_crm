import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../config/redux/actions/authAction";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    try {
      await login(payload)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-dvh mx-auto flex place-items-center">
      <div className="shadow-md w-lg mx-auto rounded-2xl p-6 m-4 bg-white">
        <p className="text-4xl font-bold text-center mb-4">Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2 text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="border border-gray-400 rounded-md p-2"
              {...register("email", { required: "Email is required" })}
            />
            <small className="text-red-500">{errors.email?.message}</small>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="mb-2 text-gray-500">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="border border-gray-400 rounded-md p-2"
              {...register("password", { required: "Password is required" })}
            />
            <small className="text-red-500">{errors.password?.message}</small>
          </div>
          <button
            type="submit"
            className="w-full rounded-md p-2 bg-gray-400 text-white hover:bg-gray-500 active:bg-gray-400/90"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
