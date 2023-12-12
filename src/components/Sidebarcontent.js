import React from "react";

export default function Sidebarcontent() {
  return (
    <>
      <div>
        <div className="bar">
          <ul className="flex flex-row justify-between w-[16rem] ml-2 mr-2 mt-8 border-[0.1rem] border-black p-4">
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

          <ul className="property mt-2 flex flex-col ">
            <label className="text-base font-mono">
              Device:
              <input className="p-2" type="search"></input>
            </label>
            <label className="text-base font-mono">
              From:
              <input
                className="border-[0.01rem] border-gray-600"
                type="date"
              ></input>
            </label>
            <label className="text-base font-mono">
              To:
              <input className="p-2" type="date"></input>
            </label>
          </ul>
          <button className="bg-blue-600 text-base font-semibold text-white rounded-sm p-2 pl-10 pr-10 ">
            Show History
          </button>
        </div>
      </div>
    </>
  );
}
