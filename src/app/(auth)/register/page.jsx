"use client";
import { useForm } from "react-hook-form";
import ErrorInput from "src/components/ErrorInput.jsx";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [typePassword, setTypePassword] = useState("password");
  const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");
  const option = {
    'text': "password",
    'password': "text"
  }

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword)
      return alert("Password and confirm password must be the same");

    delete data.confirmPassword;

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) router.push("/login");
  });

  return (
    <div className="bg-[#324068] h-screen flex justify-center items-center flex-col">
      <form
        onSubmit={onSubmit}
        className="bg-[#202435] h-full md:h-auto w-full md:w-3/5 flex flex-col gap-y-4 md:gap-y-8 py-4 px-6 md:p-10 xl:w-2/5 text-white md:rounded-lg"
      >
        <div className="flex gap-3">
          <h1 className="text-3xl font-bold text-[#2ed89a]">Register</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="capitalize text-lg md:text-xl font-semibold">
              name
            </label>
            <input
              type="text"
              className="text-md md:text-lg bg-transparent border-b-2 border-white focus:border-green-700 focus:border-b pl-2 transition-all ease-in-out delay-75 outline-none focus:outline-none auto"
              {...register("name", {
                required: { value: true, message: "This field is required" },
              })}
              placeholder="John Doe"
            />
            {errors.name && <ErrorInput message={errors.name.message} />}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="capitalize text-lg md:text-xl font-semibold"
            >
              username
            </label>
            <input
              type="text"
              className="text-md md:text-lg bg-transparent border-b-2 border-white focus:border-green-700 focus:border-b pl-2 transition-all ease-in-out delay-75 outline-none focus:outline-none"
              {...register("username", {
                required: { value: true, message: "This field is required" },
              })}
              placeholder="johndoe"
            />
            {errors.username && (
              <ErrorInput message={errors.username.message} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="capitalize text-lg md:text-xl font-semibold">
            email
          </label>
          <input
            type="email"
            className="text-md md:text-lg bg-transparent border-b-2 border-white focus:border-green-700 focus:border-b pl-2 transition-all ease-in-out delay-75 outline-none focus:outline-none"
            {...register("email", {
              required: { value: true, message: "This field is required" },
            })}
            placeholder="example@gmail.com"
          />
          {errors.email && <ErrorInput message={errors.email.message} />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-5">
          <div className="flex flex-col relative gap-1">
            <label htmlFor="" className="capitalize text-lg md:text-xl font-semibold">
              password
            </label>
            <input
              type={`${typePassword}`}
              className="text-md md:text-lg bg-transparent border-b-2 border-white focus:border-green-700 focus:border-b pl-2 transition-all ease-in-out delay-75 outline-none focus:outline-none"
              {...register("password", {
                required: { value: true, message: "This field is required" },
              })}
              placeholder="***********"
            />
            <p className="absolute text-slate-600 cursor-pointer bottom-1 right-4" onClick={()=>setTypePassword(option[typePassword])}>
            {typePassword === 'password' ? <AiFillEyeInvisible className="inline-block text-xl" /> : <AiFillEye className="inline-block text-xl" />}
          </p>
            {errors.password && (
              <ErrorInput message={errors.password.message} />
            )}
          </div>
          <div className="flex relative flex-col gap-1">
            <label htmlFor="" className="capitalize text-lg md:text-xl font-semibold">
              confirm password
            </label>
            <input
              type={`${typeConfirmPassword}`}
              className="text-md md:text-lg bg-transparent border-b-2 border-white focus:border-green-700 focus:border-b pl-2 transition-all ease-in-out delay-75 outline-none focus:outline-none"
              {...register("confirmPassword", {
                required: { value: true, message: "This field is required" },
              })}
              placeholder="***********"
            />
            <p className="absolute text-slate-600 cursor-pointer bottom-1 right-4" onClick={()=>setTypeConfirmPassword(option[typeConfirmPassword])}>
            {typeConfirmPassword === 'password' ? <AiFillEyeInvisible className="inline-block text-xl" /> : <AiFillEye className="inline-block text-xl" />}
          </p>
            {errors.confirmPassword && (
              <ErrorInput message={errors.confirmPassword.message} />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="text-md md:text-lg capitalize my-1 font-semibold rounded-md px-10 py-3 text-black bg-[#2a8b75] hover:bg-[#48E5C2]  transition-colors ease-out"
        >
          Sign up
        </button>
        <div className="flex justify-center gap-5 sm:gap-10">
          <span className="text-slate-600 hover:text-slate-300 transition-colors ease-out cursor-pointer">
            Already have an account?
          </span>
          <Link href={"/login"} className="text-[#187150] hover:opacity-75 hover:text-[#28bd86d0] transition-colors ease-out text-md font-bold">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
