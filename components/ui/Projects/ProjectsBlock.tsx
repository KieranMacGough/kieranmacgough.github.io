import React from "react";
import { projectData } from "./ProjectData";
import { ProjectCard } from "./ProjectCard";

export const ProjectsBlock: React.FC<{ bgColor: string }> = ({ bgColor }) => {
  if (!projectData || projectData.length === 0) {
    return <div className="text-white">Something went wrong...</div>;
  }
  return (
    <div
      className={`md: grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2`}
    >
      {projectData.map((data, i) => (
        <ProjectCard key={i} data={data} bgColor={bgColor} />
      ))}
    </div>
  );
};
