import { Img, Button } from "./..";
import React from "react";
export default function UserProfile1({
  userImage = "images/img_participant.png",
  userName = "Lita Sherman",
  connectionIcon = "images/img_24_video.svg",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[12.75rem] w-full relative`}
    >
      
      <Img
        src={userImage}
        alt="Participant"
        className="mx-auto h-[12.75rem] w-full flex-1 rounded-lg object-cover"
      />
      <div className="absolute bottom-[0.13rem] left-0 right-0 m-auto flex flex-1 justify-between gap-[1.25rem]">
        
        <Button
          color="black_900_d8"
          size="sm"
          shape="round"
          rightIcon={
            <Img
              src="images/img_24_video.svg"
              alt="24 / Video"
              className="h-[1.50rem] w-[1.50rem]"
            />
          }
          className="min-w-[6.88rem] gap-[0.25rem] !rounded-md font-inter"
        >
          
          {userName}
        </Button>
        <div className="flex flex-col rounded-md bg-black-900_d8">
          
          <Img
            src={connectionIcon}
            alt="24video"
            className="h-[1.50rem] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
