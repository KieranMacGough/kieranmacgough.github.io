import React from "react";
import { ITimelineData } from "./TimelineData";
import Image from "next/image";
import { Pills } from "../Pills";
import { HLine } from "../HLine";

interface ITimelineItem {
  data: ITimelineData;
}

export const TimelineItem: React.FC<ITimelineItem> = ({ data }) => {
  return (
    <div
      className={`w-full max-w-[500px] rounded-lg border-2 border-primary p-6 text-white`}
    >
      <div className="flex flex-row items-center justify-start gap-4 ">
        <div className={`overflow-hidden rounded-full border-2 border-white`}>
          <Image src={data.logo} alt="Fatjoe Logo" height={64} width={64} />
        </div>
        <div>
          <p className="text-xl">{data.name}</p>
          <p className="text-sm text-primary">{data.title}</p>
          <p className="text-sm text-zinc-400">
            {data.startDate} - {data.endDate}
          </p>
        </div>
      </div>
      <HLine margin="sm" />
      <div>
        <Pills data={data.tech} />
      </div>
    </div>
  );
};
