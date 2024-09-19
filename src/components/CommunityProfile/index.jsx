import { Heading, Img } from "./..";
import React from "react";
export default function CommunityProfile({
  communityImage = "images/img_ellipse_3.png",
  communityName = "Community A",
  followText = "Follow",
  communityImageOne = "images/img_ellipse_3.png",
  communityNameOne = "Community A",
  followTextOne = "Follow",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center flex-1`}
    >
      <div className="mx-[1.63rem] mt-[0.88rem] flex items-center justify-between gap-[3.5rem] self-stretch md:mx-0">
        <div className="flex items-center gap-[0.38rem] self-center">
          <Img
            src={communityImage}
            alt="Image"
            className="h-[2.75rem] w-[2.75rem] rounded-[22px] object-cover"
          />
          <Heading
            size="headingmd"
            as="p"
            className="!font-inter"
          >
            {communityName}
          </Heading>
        </div>
        <div>
          <Heading
            size="headinglg"
            as="p"
            className="flex items-center justify-center rounded-lg bg-cyan-800 px-[0.75rem] py-[0.13rem] !font-inter !text-gray-300"
          >
            Follow
          </Heading>
        </div>
      </div>
      {/* <div className="relative mt-[-2.75rem] flex items-start justify-center gap-[1.13rem] self-stretch">
        <div className="flex flex-1 items-center justify-center gap-[0.38rem] self-center">
          <Img
            src={communityImageOne}
            alt="Community A"
            className="h-[2.75rem] w-[2.75rem] rounded-[22px] object-cover"
          />
          <Heading size="headings" as="p" className="!font-inter">
            {communityNameOne}
          </Heading>
        </div>
        <div className="mt-[0.50rem] flex rounded-lg bg-cyan-800">
          <Heading
            size="headingxs"
            as="p"
            className="!font-inter !text-gray-300"
          >
            {followTextOne}
          </Heading>
        </div>
      </div> */}
    </div>
  );
}
