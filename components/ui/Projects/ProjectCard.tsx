"use client";

import React from "react";
import { IProjectData } from "./ProjectData";
import { Pills } from "../Pills";
import { HLine } from "../HLine";
import GithubIcon from "../../../images/github.svg";
import Image from "next/image";
import { Anchor } from "../Anchor";

interface IProjectCard {
  data: IProjectData;
}
export const ProjectCard: React.FC<IProjectCard> = ({ data }) => {
  if (!data) {
    <></>;
  }
  return (
    <div
      className={`mx-auto w-full overflow-hidden rounded-xl border border-primary ease-in-out`}
    >
      <div>
        <Image
          className="h-[180px] w-full object-cover"
          src={data.logo}
          alt="Modern building architecture"
          height={180}
          width={180}
          quality={100}
          sizes={"100vw"}
        />
      </div>
      <div className="flex flex-col p-5 md:p-8">
        <div className="text-sm uppercase text-primary">{data.type}</div>
        <p className="mt-1 block text-lg font-medium text-white">{data.name}</p>
        <p className="mt-2 flex-grow text-zinc-400 md:min-h-[144px]">
          {data.description}
        </p>
        <div className="flex flex-col justify-end">
          <HLine margin="md" />
          <Pills data={data.tech} className={`md:min-h-[56px]`} />
          <HLine margin="md" />
          <div className={`flex w-full items-center justify-between`}>
            <>
              {data.seeMoreLink ? (
                <Anchor href={data.seeMoreLink}>See More</Anchor>
              ) : null}

              {data.githubLink ? (
                <a href={data.githubLink} target="_blank" rel="noreferrer">
                  <Image
                    src={GithubIcon}
                    alt={"Github"}
                    height={32}
                    width={32}
                  />
                </a>
              ) : null}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
