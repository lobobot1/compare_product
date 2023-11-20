import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#51649e] flex flex-col justify-center items-center w-full h-screen gap-6">
      <h1 id="wecolme" className=" font-semibold text-white text-[40px] text-center tracking-[0] leading-[normal] animate-fade-right animate-once animate-ease-in">
        WELCOME TO PRODUCT Q/A
      </h1>
      <p className=" font-medium text-white text-[24px] text-center tracking-[0] leading-[normal]">
        Are you have an account?
      </p>
      <div className="flex gap-6 text-white">
        <Link href={'/login'} className="rounded-md bg-green-800 px-3 py-1 font-medium text-[24px] text-center tracking-[0] leading-[normal]">
          Sign In
        </Link>
        <Link href={'/register'} className="rounded-md bg-green-800 px-3 py-1 font-medium text-[24px] text-center tracking-[0] leading-[normal]">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
