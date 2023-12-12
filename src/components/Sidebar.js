import React, { useState } from "react";
import Sidebarcontent from "./Sidebarcontent";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <button
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg fill="#fff" viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      ) : (
        <button
          className="text-xl text-black fixed top-4 left-4 z-10"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          X
        </button>
      )}
      <div
        className={`top-0 left-[-35vw] fixed
  bg-white w-[35vw] h-full pt-10 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } ease-in-out duration-300`}
      >
        <Sidebarcontent></Sidebarcontent>
      </div>
    </>
  );
}
