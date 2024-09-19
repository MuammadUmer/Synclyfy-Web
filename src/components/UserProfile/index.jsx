import { Text, Img } from "./..";
import React from "react";
export default function UserProfile({
  userImage = "images/img_designs.png",
  userDescription = (
    <>
      lorem lorem loerm lorem mlore <br /> lorem lorenkdnvd lkankaf ajlkajf
      <br /> fakjfhkjahfkaffask......
    </>
  ),
  attendText = "Attend",
  viewText = "View",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center  w-[20%] md:w-full p-[0.75rem] border-blue_gray-900_04 border border-solid rounded-[30px]`}
    >

      <Img
        src={userImage}
        alt="Image"
        className="h-[7.00rem] w-full rounded-[20px] object-cover"
      />
      <Text
        size="text2xl"
        as="p"
        className={`font-thin mt-[0.63rem] w-full leading-[150%] ${props.color}`}
      >

        {userDescription}
      </Text>
      <div className="mb-[0.25rem] mt-[1.13rem] flex flex-wrap justify-center gap-[0.50rem] w-full">

        <Text
          size="text4xl"
          as="p"
          className="flex items-center justify-center rounded-[10px] bg-blue_gray-900_04 px-[1.13rem]"
        >

          {attendText}
        </Text>
        <Text
          size="text4xl"
          as="p"
          className="flex items-center justify-center rounded-[10px] bg-white-a700 px-[1.50rem] !text-blue_gray-900_04 sm:px-[1.25rem]"
        >

          {viewText}
        </Text>
      </div>
    </div>
  );
}
