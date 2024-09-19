import { Img } from "./..";
import React from "react";
export default function IconContainer({
  homeIcon = "images/img_24_home.svg",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center flex-1`}>
      <div className="flex w-full justify-center p-[0.25rem]">
        <Img src={homeIcon} alt="24home" className="h-[1.50rem] w-[1.50rem]" />
      </div>
    </div>
  );
}
