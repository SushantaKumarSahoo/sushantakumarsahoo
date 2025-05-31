
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2018",
      content: (
        <div className=" flex flex-col gap-2 md:gap-4">
          <p className="text-2xl tracking-wide md:text-3xl lg:text-4xl font-serif">
            Shri Ramraje International School, Ratnagiri
          </p>
          <p className="text-md md:text-xl font-semibold text-white/70">
            Senior Secondary School
          </p>
          <span className="text-xs md:text-lg text-white">CBSE</span>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className=" flex flex-col gap-4  md:gap-4">
          <p className="text-2xl tracking-wide md:text-3xl lg:text-4xl font-serif">
            Central Railway School and Junior College, Kalyan
          </p>
          <p className="text-md md:text-xl font-semibold text-white/70">
            Higher Secondary School, Science
          </p>
          <span className="text-xs md:text-lg text-white">CBSE</span>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className=" flex flex-col gap-4  md:gap-4">
          <p className="text-2xl tracking-wide md:text-3xl lg:text-4xl font-serif">
            Vidyalankar Institute of Technology, Mumbai
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-md md:text-xl font-semibold text-white/70">
              University of Mumbai
            </p>
            <p className="text-xl font-bold text-white/90">
              BE Electronics Engineering
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="education" className="  w-full ">
      <Timeline data={data} />
    </div>
  );
}
