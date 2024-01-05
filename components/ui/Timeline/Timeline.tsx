import React from "react";
import { timelineData } from "./TimelineData";
import { TimelineItem } from "./TimelineItem";

export const Timeline: React.FC = () => {
  console.log(timelineData);
  if (!timelineData || timelineData.length === 0) {
    return <div className="text-white">Something went wrong...</div>;
  }
  return (
    <div className={`flex w-full flex-col items-center gap-8`}>
      {timelineData.map((data, i) => (
        <TimelineItem key={i} id={i} data={data} />
      ))}
    </div>
  );
};
