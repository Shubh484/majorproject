import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container w-[80rem]">
        <nav className="bg-blue-600 flex flex-row justify-between w-[79rem]">
          <div className="menu-icon ml-2">
            <a className="flex flex-col mt-2 ml-2 p-2" href="#">
              <div className="w-8 h-[0.2rem] bg-white mb-1"></div>
              <div className="w-8 h-[0.2rem] bg-white mb-1"></div>
              <div className="w-8 h-[0.2rem] bg-white "></div>
            </a>
          </div>
          <div className="flex flex-row justify-end p-4 space-x-8">
            <img className="w-6" src="search.png"></img>
            <img className="w-6" src="bell.png"></img>
            <img className="w-6" src="user.png"></img>
          </div>
        </nav>
        <section className="Vehicle flex flex-row justify-between mt-2 mr-6 ml-6">
          <div className="flex flex-row space-x-8 border-4 p-8 pr-16 bg-blue-500 ">
            <img className="w-12" src="totalVehicle.png"></img>

            <div className="text-white">
              <p className="font-mono">TOTAL VEHICLE</p>
              <p className="font-semibold">2</p>
            </div>
          </div>
          <div className="flex flex-row space-x-8 border-4 p-8 pr-16 bg-green-500">
            <img className="w-12" src="MovingVehicle.png"></img>
            <div className="text-white">
              <p className="font-mono">MOVING VEHICLE</p>
              <p className="font-semibold">0</p>
            </div>
          </div>
          <div className="flex flex-row space-x-8 border-4 p-8 pr-24 bg-red-500">
            <img className="w-12" src="parking.png"></img>
            <div className="text-white">
              <p className="font-mono">PARKING</p>
              <p className="font-semibold">2</p>
            </div>
          </div>
          <div className="flex flex-row space-x-8 border-4 p-8 pr-16 bg-yellow-500">
            <img className="w-12" src="idieVehicle.png"></img>
            <div className="text-white">
              <p className="font-mono">IDIE VEHICLE</p>
              <p className="font-semibold">0</p>
            </div>
          </div>
        </section>
        <section className="Map mt-2">
          <div className="Map flex flex-row">
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
            </div>
            <div>
              <iframe
                className="w-[64rem]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205857.80002173755!2d77.34777499677017!3d28.50170124568354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1702279825567!5m2!1sen!2sin"
                width="600"
                height="450"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
