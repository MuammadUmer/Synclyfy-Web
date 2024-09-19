import { Text, Img } from "./..";
import React from "react";
export default function UserProfile2({
  userImage = "images/img_designs_150x146.png",
  viewText = "View",
  useText = "Use",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center justify-center w-full gap-[0.50rem] p-[0.88rem] bg-blue_gray-100 rounded-[30px]`}
    >
      <Img
        src={userImage}
        alt="View"
        className="h-[9.38rem] w-full rounded-[20px] object-cover"
      />
      <div className="flex flex-wrap justify-center gap-[0.75rem] self-stretch">
        <Text
          size="textxs"
          as="p"
          className="rounded-[10px] border border-solid border-white-a700 px-[1.38rem] !text-black-900 sm:px-[1.25rem]"
        >
          {viewText}
        </Text>
        <Text
          size="textxs"
          as="p"
          className="rounded-[10px] border border-solid border-cyan-800 px-[1.50rem] !text-black-900 sm:px-[1.25rem]"
        >
          {useText}
        </Text>
      </div>
    </div>
  );
}
