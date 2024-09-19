import { Text } from "./..";
import React from "react";
export default function DateList({
  dateSixteenth = "16",
  dateSeventeenth = "17",
  dateEighteenth = "18",
  dateNineteenth = "19",
  dateTwentieth = "20",
  dateTwentyFirst = "21",
  dateTwentySecond = "22",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center gap-[0.13rem] px-[1.00rem] flex-1`}
    >
      <div className="flex w-full flex-col items-center p-[0.25rem]">
        <Text as="p" className="tracking-[0.00rem]">
          {dateSixteenth}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center p-[0.25rem]">
        <Text as="p" className="tracking-[0.00rem]">
          {dateSeventeenth}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center p-[0.25rem]">
        <Text as="p" className="tracking-[0.00rem]">
          {dateEighteenth}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center p-[0.25rem]">
        <Text as="p" className="tracking-[0.00rem]">
          {dateNineteenth}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center p-[0.25rem]">
        <Text as="p" className="tracking-[0.00rem]">
          {dateTwentieth}
        </Text>
      </div>
      <div className="relative h-[2.75rem] w-full px-[0.50rem] py-[0.13rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1.50rem] w-[1.50rem] rounded-[12px] bg-teal-700_33 shadow-xs" />
        <Text
          as="p"
          className="absolute bottom-0 left-[0.69rem] top-0 my-auto h-max tracking-[0.00rem] !text-teal-700"
        >
          {dateTwentyFirst}
        </Text>
      </div>
      <div className="flex w-full flex-col items-center p-[0.25rem]">
        <Text as="p" className="tracking-[0.00rem]">
          {dateTwentySecond}
        </Text>
      </div>
    </div>
  );
}
