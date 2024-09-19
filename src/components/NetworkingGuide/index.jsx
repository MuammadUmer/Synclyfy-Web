import { Img, Text, Heading } from "./..";
import React from "react";
export default function NetworkingGuide({
  titleText = "Start Your Networking Journey",
  descriptionText = `Networking is more than just exchanging business cards—it's about building relationships that can help you grow both personally and professionally. Whether you're attending a conference, workshop, or social event, the connections you make can open doors to new opportunities. In this guide, we’ll explore strategies for effective networking, from preparation to follow-up, so you can make the most of your time at any event.`,
  authorText = "-Mr. Chat GPT",
  learnMoreLink = "Learn More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[44%] md:w-full p-[0.50rem] border-white-a700 border border-solid rounded-[50px]`}
    >
      <div className="ml-[0.38rem] mt-[3.25rem] flex w-[92%] justify-center p-[0.63rem] sm:ml-0">
        <Text
          size="text12xl"
          as="p"
          className="w-full font-normal font-saira leading-[150%] sm:w-full sm:text-[2.13rem]"
        >
          {titleText}
        </Text>
      </div>
      <Text
        size="text8xl"
        as="p"
        className="font-saira font-thin mt-[0.25rem] w-[80%] leading-[150%] sm:w-full"
      >
        {descriptionText}
      </Text>
      <div className="mx-[1.50rem] flex justify-end w-full px-[0.63rem] mr-[25%] py-[0.38rem] sm:mx-0">
        <Heading
          size="text5xl"
          as="p"
          className="font-thin font-saira sm:text-[0.94rem]"
        >
          {authorText}
        </Heading>
      </div>
      <div className="flex h-[6.25rem] items-center bg-[url(/public/images/img_group_213.svg)] bg-cover bg-no-repeat p-[1.38rem] sm:h-auto sm:p-[1.25rem]">
        <a href="/learnmore" className="sm:text-[1.56rem]">
          <Text size="text9xl" as="p" className="font-normal font-saira">
            {learnMoreLink}
          </Text>
        </a>
      </div>
      <div className="ml-[0.88rem] mr-[2.25rem] mt-[1.38rem] flex w-[92%] items-center justify-center sm:mx-0">
        <Img
          src="images/img_arrow_head_2.svg"
          alt="Arrowheadtwo"
          className="h-[4.38rem] w-[14%] object-contain"
        />
        <div className="flex flex-1 justify-center gap-[0.50rem] px-[3.50rem] md:px-[1.25rem]">
          <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-white-a700" />
          <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-gray-500_f3" />
          <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-gray-600_d1" />
          <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-gray-600_d1" />
          <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-gray-600_d1" />
        </div>
        <Img
          src="images/img_arrow_head_1.svg"
          alt="Arrowheadone"
          className="h-[4.38rem] w-[14%] object-contain"
        />
      </div>
    </div>
  );
}
