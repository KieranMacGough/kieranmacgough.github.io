import React from "react";
import Image from "next/image";
import { IProjectData } from "./ProjectData";

interface IProjectCard {
  data: IProjectData;
  bgColor: string;
}
export const ProjectCard: React.FC<IProjectCard> = ({ data, bgColor }) => {
  return (
    <a
      className={`mx-auto h-full w-full max-w-md overflow-hidden rounded-xl ${bgColor} border border-primary ease-in-out`}
    >
      <div className="">
        <div className="">
          <Image
            className="h-40 w-full object-cover"
            src={data.logo}
            alt="Modern building architecture"
            height={160}
            width={160}
          />
        </div>
        <div className="p-8">
          <div className="text-sm uppercase text-primary">{data.type}</div>
          <p className="mt-1 block text-lg font-medium text-white">
            {data.name}
          </p>
          <p className="mt-2 text-zinc-400">{data.description}</p>
        </div>
      </div>
    </a>
  );
};
