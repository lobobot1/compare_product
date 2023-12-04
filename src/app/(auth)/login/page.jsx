'use client'
import {useState} from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import ErrorInput from "src/components/ErrorInput.jsx";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

function LoginPage() {
  const { register, handleSubmit , formState:{errors}} = useForm();
  const [error, setError] = useState(null);
  const [typePassword, setTypePassword] = useState('password')
  const router = useRouter();
  const option = {
    'text': "password",
    'password': "text"
  }

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });
    if(res.error)
      setError(res.error)
    else
      router.push('/home')
  };

  return (
    <div className="bg-[#324068] h-screen flex justify-center items-center flex-col gap-10">
      <form className="flex flex-col bg-[#202435] w-full h-full md:h-auto md:w-3/5  lg:w-2/5 py-10 px-6 sm:rounded-lg text-white gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-3 capitalize">
          <h2 className="text-3xl font-bold cursor-default text-[#23a475]">Log in</h2>
        </div>
        {error && <ErrorInput message={error} />}
        <div className="flex flex-col gap-3 px-2">
          <label className="capitalize text-xl font-semibold" htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            placeholder="John Doe"
            className="text-lg bg-transparent border-b-2 border-white focus:border-green-700 focus:border-b pl-2 transition-all ease-in-out delay-75 outline-none focus:outline-none"
            {...register("username", {
              required: { value: true, message: "This field is required" },
            })}
          />
          {errors.username && <ErrorInput message={errors.username.message} />}
        </div>

        <div className="flex relative flex-col gap-3 px-2 font-semibold">
          <label className="capitalize text-xl" htmlFor="password">Password:</label>
          <input
            type={`${typePassword}`}
            id="password"
            placeholder="********"
            className="bg-transparent border-b-2 border-white focus:border-green-700 focus:border-b pl-2 transition-all ease-in-out delay-75 outline-none focus:outline-none"
            {...register("password", {
              required: { value: true, message: "This field is required" },
            })}
          />
          <p className="absolute text-slate-600 cursor-pointer bottom-1 right-4" onClick={()=>setTypePassword(option[typePassword])}>
            {typePassword === 'password' ? <AiFillEyeInvisible className="inline-block text-xl" /> : <AiFillEye className="inline-block text-xl" />}
          </p>
          {errors.password && <ErrorInput message={errors.password.message} />}
        </div>
        <div className="text-center sm:text-end">
          <p className="text-slate-600 hover:text-slate-300 transition-colors ease-out cursor-pointer">Forgot my password?</p>
        </div>
        <div className="flex justify-center">
          <button className="text-md md:text-lg capitalize my-1 w-full font-semibold rounded-md px-10 py-3 text-black bg-[#2a8b75] hover:bg-[#48E5C2]  transition-colors ease-out" type="submit">Login</button>
        </div>
        <div className="flex justify-around">
          <span className="text-slate-600 cursor-default text-md">{`Don't have an account?`}</span>
          <Link className="text-[#187150] hover:opacity-75 hover:text-[#28bd86d0] transition-colors ease-out text-md font-bold" href={'/register'}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
