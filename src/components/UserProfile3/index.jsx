import { Text, Heading, Img } from "./..";
import React from "react";
export default function UserProfile3({
  userImage = "images/img_avatars_3d_avatar_21.png",
  userName = "Synclyfy",
  userTime = "9:41 AM",
  userDescription = "Grab your popcorn, the tech show is live! 😋",
  ...props
}) {
  return (
    <div {...props}
      className={`${props.className} flex items-center p-3 max-w-xs bg-pink-100 rounded-lg shadow-lg`}>
      {/* Avatar */}
      <div className="mr-3">
        <img
          src={userImage} // Replace with actual image URL
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Message Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          {/* <p className="font-bold text-gray-900">{userName}</p> */}
          <Heading
            size="headinglg"
            as="p"
            className="tracking-[0.00rem] font-saira !text-black-900"
          >
            {userName}
          </Heading>
          {/* <p className="text-xs !text-gray-800_02">{userTime}</p> */}
          <Text size="textlg" as="p" className="!text-gray-800_02 font-saira">
            {userTime}
          </Text>
        </div>
        <p className="text-sm tracking-[0.00rem] !text-black-900">
          {userDescription}
          {/* <span role="img" aria-label="emoji">
            😘
          </span> */}
        </p>
      </div>
    </div>
  );
}

{/* <div
{...props}
className={`${props.className} flex justify-center items-center gap-[0.63rem]p - [0.50rem] flex - 1`}
>
<Img
  src={userImage}
  alt="Synclyfy"
  className="h-[2.38rem] w-[2.38rem] object-cover"
/>
<div className="flex flex-1 flex-col items-center self-end">
  <div className="flex items-center justify-center self-stretch">
    <Heading
      size="headinglg"
      as="p"
      className="tracking-[0.00rem] !text-black-900"
    >
      {userName}
    </Heading>
    <div className="flex flex-1 justify-end px-[0.50rem]">
      <Text size="textlg" as="p" className="!text-gray-800_02">
        {userTime}
      </Text>
    </div>
  </div>
  <Text
    size="text2xl"
    as="p"
    className="relative mt-[-0.50rem] tracking-[0.00rem] !text-black-900"
  >
    {userDescription}
  </Text>
</div>
</div> */}
