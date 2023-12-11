import React from "react";

export default function Sidebarcontent() {
  return (
    <>
      <div>
        <div className="bar">
          <ul className="flex flex-row justify-between w-[14rem] ml-2 mr-2">
            <li className="hover:underline underline-offset-8 hover:text-blue-600 hover:font-semibold">
              Object
            </li>
            <li className="hover:underline underline-offset-8 hover:text-blue-600 hover:font-semibold">
              Events
            </li>
            <li className="hover:underline underline-offset-8 hover:text-blue-600 hover:font-semibold">
              History
            </li>
          </ul>

          <ul className="property mt-2 ">
            <li className="pt-4">Device:</li>
            <li className="pt-4">From:</li>
            <li className="pt-4">To:</li>
          </ul>
        </div>
      </div>
    </>
  );
}
