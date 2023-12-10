import React from "react";
import "./componentcss.css";

export default function Login() {
  return (
    <>
      <div className="bg-white h-screen Image_added">
        <img
          className="w-[16rem] absolute top-[11rem] left-[10rem]"
          src="download.png"
        ></img>

        <h1 className=" font-medium font-serif text-4xl absolute top-[6rem] left-[38rem]">
          Geofencing
        </h1>

        <div className="flex flex-col align-baseline absolute top-[10rem] left-[33rem] w-[22rem] h-fit Shadow bg-slate-100  ">
          <label className="flex flex-col font-normal p-4">
            <p className="pb-2 font-medium">E-mail</p>{" "}
            <input type="email" placeholder="Enter your E-mail" name="E-mail" />
          </label>
          <br></br>
          <lable className="flex flex-col font-normal pt-1 pl-4">
            <p className="pb-2 font-medium">Password</p>{" "}
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
            />
          </lable>
          <button className=" text-lg font-semibold pt-4 pb-4 mt-8 bg-green-600  ">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
