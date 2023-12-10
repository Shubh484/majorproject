import React from "react";
import "./componentcss.css";

export default function Login() {
  return (
    <>
      <div className="bg-slate-600 h-screen">
        <div className="flex flex-col align-baseline absolute top-[10rem] left-[33rem] Shadow w-[22rem] h-[18rem]">
          <img className="w-[8rem]" src="download.jfif"></img>
          <h1 className=" font-medium font-mono text-4xl ml-[4rem] pb-16">
            Geofencing
          </h1>
          <label className="flex flex-col font-normal pr-2">
            <p className="pb-2">E-mail</p> <input type="email" name="E-mail" />
          </label>
          <br></br>
          <lable className="flex flex-col font-normal pr-2 pb-2">
            <p className="pb-2">Password</p>{" "}
            <input type="password" name="password" />
          </lable>
          <button className="bg-slate-700 text-lg font-semibold pt-4 pb-4 mt-8 ">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
