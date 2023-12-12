import React from "react";

export default function Sidebarcontent() {
  return (
    <>
      <div>
        <div className="bar bg-slate-200 h-screen">
          <ul className="flex flex-row justify-between w-[16rem] ml-16 mr-2 mt-8 border-black p-4">
            <li className="hover:underline underline-offset-8 font-semibold hover:text-blue-600 hover:font-bold">
              Object
            </li>
            <li className="hover:underline underline-offset-8 font-semibold hover:text-blue-600 hover:font-bold">
              Events
            </li>
            <li className="hover:underline underline-offset-8 font-semibold hover:text-blue-600 hover:font-bold">
              History
            </li>
          </ul>
          <div className="bg-black h-[0.1rem] w-full"></div>

          <ul className="property mt-4 flex flex-col ml-6 ">
            <label className="text-base font-mono mb-6 ">
              Device:
              <input
                className="shadow appearance-none border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="search"
              ></input>
            </label>
            <label className="text-base font-mono mb-6">
              From:
              <input
                className="shadow appearance-none border rounded w-fit ml-4  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
              ></input>
            </label>
            <label className="text-base font-mono mb-6">
              To:
              <input
                className="shadow appearance-none border rounded w-fit ml-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="time"
              ></input>
            </label>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-20 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Show History
          </button>
        </div>
      </div>
    </>
  );
}
