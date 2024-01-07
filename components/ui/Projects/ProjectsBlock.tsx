import React from "react";
import { IProjectData } from "./ProjectData";
import { ProjectCard } from "./ProjectCard";

export const ProjectsBlock: React.FC<{ data: IProjectData[] }> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="text-white">Something went wrong...</div>;
  }
  return (
    <div
      className={`grid w-full grid-cols-1  justify-stretch gap-8 md:grid-cols-2 lg:grid-cols-2`}
    >
      {data.map((projectData, i) => (
        <ProjectCard key={i} data={projectData} />
      ))}
    </div>
  );
};
