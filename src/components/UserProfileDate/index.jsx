import { Text } from "./..";
import React from "react";
export default function UserProfileDate({ dateText = "2", ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full p-[0.25rem]`}
    >
      <Text as="p" className="tracking-[0.00rem]">
        {dateText}
      </Text>
    </div>
  );
}
