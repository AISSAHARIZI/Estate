import React from "react";

function Hero() {
  return (
    <div className="space-y-7 flex flex-col justify-center text-white items-center my-90">
      <div className="  h-[50%] ">
        <img
          src={"header_img.png"}
          className="object-cover absolute h-[100vh] w-[100vw] inset-0 z-[-1]    "
        />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-7xl font-bold">Explore homes that </h1>
        <h1 className="text-7xl font-bold">fit your dream</h1>
      </div>

      <div className="flex items-center gap-6 ">
        <button className="bg-transparent  border-1 border-solid border-gray-500 cursor-pointer rounded-sm px-5 py-3 ">
          Projects
        </button>
        <button className="bg-blue-500  text-white cursor-pointer rounded-sm  px-5 py-3">
          Contect Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
