import { Text, Heading, Img } from "./..";
import React from "react";
export default function UserProfile4({
  four = "4",
  userImage = "images/img_ellipse_56_32x32.png",
  userName = "Community A",
  userAttendance = "95K attnd",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center p-[0.50rem] flex-1 rounded-[12px]`}
    >
      <div className="flex flex-1 items-center justify-center">
        <Text
          size="textxl"
          as="p"
          className="text-shadow-ts !text-[0.88rem] !text-gray-800_01"
        >
          {four}
        </Text>
        <div className="flex flex-1 items-center gap-[0.75rem] px-[0.75rem]">
          <Img
            src={userImage}
            alt="Community A"
            className="h-[2.00rem] w-[2.00rem] rounded-[16px] object-cover"
          />
          <Heading
            size="headingmd"
            as="p"
            className="self-end !text-[0.88rem] !text-gray-800_01"
          >
            {userName}
          </Heading>
        </div>
      </div>
      <Text size="textxl" as="p" className="!text-[0.88rem] !text-gray-800_01">
        {userAttendance}
      </Text>
    </div>
  );
}
