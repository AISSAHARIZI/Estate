"use client";
import React from "react";
import { projectsData } from "../../../public/assets";
import {
  Carousel,
  CarouselContent,

  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Project() {
  

 
  return (
    <div className="my-50 space-y-15 container items-center w-full overflow-hidden mx-auto">
      <div className="flex flex-col items-center gap-4">
        <div className="flex text-5xl">
          <h1 className="font-bold ">Projects</h1>
          <h1 className="underline font-mono">Completed</h1>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-gray-500">
            Crafting Spaces,Building Legacies-Explore
          </p>
          <p className="text-gray-500">Our Portfolio</p>
        </div>
         <Carousel className="w-full mt-50 ">
      <CarouselContent className="-ml-1 gap-5">
        
          
        
        {projectsData.map((prjt, index) => (
            <div
              key={index}
              className=" relative flex-shrink-0 w-full sm:w-1/4 justify-center"
            >
              <img src={prjt.image + ".jpg"} className="mb-14" alt="" />

              <div className="  absolute  flex justify-start w-3/4 mx-auto shadow-md left-0 right-0 z-10 bottom-5 bg-amber-50  ">
                <div className="inline-block px-3 py-2  ">
                  <h1 className="font-bold text-xl">{prjt.title}</h1>
                  <p className="text-gray-500">
                    {prjt.price} | {prjt.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
      </CarouselContent >
      <CarouselPrevious className="w-30 z-10" />
      <CarouselNext className="w-30 z-10"  />
    </Carousel>
        
      </div>
      
    </div>
  );
}

export default Project;
