import React from "react";
import { ITimelineData } from "./TimelineData";
import Image from "next/image";
import { Pill } from "../Pill";

interface ITimelineItem {
  data: ITimelineData;
  id: number;
}

export const TimelineItem: React.FC<ITimelineItem> = ({ data, id }) => {
  return (
    <div
      className={`border-primary w-full max-w-[500px] rounded-lg border-2 p-6 text-white`}
    >
      <div className="flex flex-row items-center justify-start gap-4 pb-3">
        <div className={`overflow-hidden rounded-full border-2 border-white`}>
          <Image
            src={data.logo}
            alt="Fatjoe Logo"
            objectFit="cover"
            height={64}
            width={64}
          />
        </div>
        <div>
          <p className="text-xl">{data.name}</p>
          <p className="text-primary text-xs">{data.title}</p>
          <p className="text-xs text-gray-500">
            {data.startDate} - {data.endDate}
          </p>
        </div>
      </div>
      <div>
        <div className={`flex flex-wrap gap-1`}>
          {data.tech.map((item) => (
            <Pill color="red">{item}</Pill>
          ))}
        </div>
      </div>
    </div>
  );
};
