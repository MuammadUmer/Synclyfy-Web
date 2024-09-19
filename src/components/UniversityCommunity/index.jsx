import { Img, Text, Heading } from "..";
import React from "react";
export default function UniversityCommunity({
  attendeeUi = "Attendee UI",
  organizerUi = "Organizer UI",
  universityTitle = "University Community",
  universityDescription = "Connect with students, faculty, and alumni through events and lively chats!",
  techStackTitle = "Tech Stack Community ",
  organizerTitle = "Organizer Community ",
  recommendationText = "Hey, any recommendations for C++ open-source projects?💻",
  contributionText = "Try contributing to Mozilla Firefox.",
  frontendDevText = "I’m into front-end dev. Any project suggestions?🤔",
  bootstrapText = "Check out Bootstrap, Ali. It’s widely used in front-end dev.",
  hackathonText = (
    <>
      By the way, our Programming Society hackathon <br /> is next month! Who’s
      in?
    </>
  ),
  mentorText = "Count me in as a mentor 👩‍🏫",
  aiText = "I’m in for AI!🤖",
  messageText = "Message",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[96%] md:w-full mt-[10.25rem] gap-[6.88rem] md:gap-[5.13rem] md:px-[1.25rem] sm:gap-[3.44rem]`}
    >
      <div className="flex w-full flex-col items-center px-[3.50rem] md:px-[1.25rem]">
        <div className="flex flex-wrap gap-[0.75rem]">
          <Text
            size="text2xl"
            as="p"
            className="flex items-center justify-center rounded-[10px] bg-cyan-800 px-[2.13rem] sm:px-[1.25rem]"
          >
            {attendeeUi}
          </Text>
          <Text
            size="text2xl"
            as="p"
            className="flex items-center justify-center rounded-[10px] bg-white-a700 px-[2.00rem] !text-cyan-800 sm:px-[1.25rem]"
          >
            {organizerUi}
          </Text>
        </div>
      </div>
      <div className="flex items-center self-stretch md:flex-col">
        <div className="flex w-[34%] flex-col items-start gap-[1.38rem] md:w-full">
          <div className="flex h-[9.50rem] w-[88%] items-start justify-center bg-[url(/public/images/img_group_212.svg)] bg-cover bg-no-repeat p-[0.75rem] md:h-auto md:w-full">
            <div className="mb-[1.63rem] flex w-full flex-col items-end">
              <Heading size="heading5xl" as="h2" className="leading-[150%]">
                {universityTitle}
              </Heading>
              <Text
                size="text4xl"
                as="p"
                className="w-[90%] !font-light leading-[150%] md:w-full"
              >
                {universityDescription}
              </Text>
            </div>
          </div>
          <div className="relative h-[6.25rem] content-center self-stretch md:h-auto">
            <div className="h-[6.25rem] w-[86%] rounded-[42px] border-2 border-solid border-gray-200_bf bg-gray-300_3f" />
            <Heading
              size="heading5xl"
              as="h2"
              className="absolute bottom-0 left-[7%] top-0 my-auto h-max !text-cyan-800"
            >
              {techStackTitle}
            </Heading>
          </div>
          <div className="relative h-[6.25rem] content-center self-stretch md:h-auto">
            <div className="h-[6.25rem] w-[86%] rounded-[42px] border-2 border-solid border-gray-200_bf bg-gray-300_3f" />
            <Heading
              size="heading5xl"
              as="h2"
              className="absolute bottom-0 left-[8%] top-0 my-auto h-max !text-cyan-800"
            >
              {organizerTitle}
            </Heading>
          </div>
        </div>
        <div className="h-[72.88rem] flex-1 bg-[url(/public/images/img_group_211.png)] bg-cover bg-no-repeat md:h-auto md:self-stretch">
          <div className="rounded-[30px] bg-gradient p-[2.25rem] sm:p-[1.25rem]">
            <div className="ml-[1.88rem] mt-[0.50rem] flex flex-col gap-[4.38rem] md:ml-0 md:gap-[3.25rem] sm:gap-[2.19rem]">
              <Img
                src="images/img_nav_bar.svg"
                alt="Navbar"
                className="ml-[4.88rem] mr-[4.75rem] h-[7.50rem] md:mx-0"
              />
              <div>
                <div className="flex items-start gap-[1.25rem] md:flex-col">
                  <Img
                    src="images/img_unsplash_ieebwgy_6la.png"
                    alt="Unsplash"
                    className="h-[5.38rem] w-[5.38rem] rounded-[42px] object-cover md:w-full"
                  />
                  <div className="mt-[0.25rem] flex-1 self-end rounded-[30px] bg-gray-700 px-[0.88rem] py-[1.75rem] md:self-stretch sm:self-auto sm:py-[1.25rem]">
                    <Text as="p" className="leading-[150%]">
                      {recommendationText}
                    </Text>
                  </div>
                </div>
                <div className="mt-[1.00rem] flex items-start gap-[1.44rem] sm:flex-col">
                  <Img
                    src="images/img_unsplash_ieebwgy_6la_86x86.png"
                    alt="Unsplash"
                    className="h-[5.38rem] w-[5.38rem] rounded-[42px] object-cover sm:w-full"
                  />
                  <div className="flex w-[56%] justify-center self-end rounded-[30px] bg-blue_gray-600 px-[1.63rem] py-[1.75rem] sm:w-full sm:self-auto sm:p-[1.25rem]">
                    <Text as="p" className="w-full leading-[150%]">
                      {contributionText}
                    </Text>
                  </div>
                </div>
                <div className="mt-[0.88rem] flex items-start gap-[1.44rem] md:flex-col">
                  <Img
                    src="images/img_unsplash_ieebwgy_6la_1.png"
                    alt="Unsplash"
                    className="h-[5.38rem] w-[5.38rem] rounded-[42px] object-cover md:w-full"
                  />
                  <div className="flex w-[72%] justify-center self-end rounded-[30px] bg-blue_gray-500 px-[0.63rem] py-[1.75rem] md:w-full md:self-auto sm:py-[1.25rem]">
                    <Text as="p" className="w-full leading-[150%]">
                      {frontendDevText}
                    </Text>
                  </div>
                </div>
                <div className="mr-[1.75rem] mt-[1.25rem] flex items-center gap-[1.25rem] md:mr-0 md:flex-col">
                  <Img
                    src="images/img_unsplash_ieebwgy_6la_2.png"
                    alt="Unsplash"
                    className="h-[5.38rem] w-[5.38rem] self-end rounded-[42px] object-cover md:w-full md:self-auto"
                  />
                  <div className="flex-1 rounded-[30px] bg-gray-600 px-[1.13rem] py-[1.75rem] md:self-stretch sm:py-[1.25rem]">
                    <Text as="p" className="leading-[150%]">
                      {bootstrapText}
                    </Text>
                  </div>
                </div>
                <div className="mt-[1.25rem] flex items-start gap-[1.44rem] md:flex-col">
                  <Img
                    src="images/img_unsplash_ieebwgy_6la_3.png"
                    alt="Unsplash"
                    className="h-[5.38rem] w-[5.38rem] rounded-[42px] object-cover md:w-full"
                  />
                  <div className="flex w-[72%] justify-center self-center rounded-[30px] bg-pink-800 p-[0.63rem] md:w-full">
                    <Text as="p" className="w-full leading-[150%]">
                      {hackathonText}
                    </Text>
                  </div>
                </div>
                <div className="mt-[1.25rem] flex items-start gap-[1.44rem] sm:flex-col">
                  <Img
                    src="images/img_unsplash_ieebwgy_6la_4.png"
                    alt="Unsplash Eleven"
                    className="h-[5.38rem] w-[5.38rem] rounded-[42px] object-cover sm:w-full"
                  />
                  <div className="flex w-[42%] justify-center self-center rounded-[30px] bg-black-900_cc px-[0.75rem] py-[1.75rem] sm:w-full sm:py-[1.25rem]">
                    <Text as="p" className="w-full leading-[150%]">
                      {mentorText}
                    </Text>
                  </div>
                </div>
                <div className="mt-[1.25rem] flex items-start gap-[1.44rem]">
                  <Img
                    src="images/img_unsplash_ieebwgy_6la_5.png"
                    alt="Unsplash"
                    className="h-[5.38rem] w-[5.38rem] rounded-[42px] object-cover"
                  />
                  <div className="flex w-[24%] justify-center self-center rounded-[30px] bg-indigo-300 px-[0.75rem] py-[1.75rem] sm:py-[1.25rem]">
                    <Text as="p" className="w-full leading-[150%]">
                      {aiText}
                    </Text>
                  </div>
                </div>
                <div className="mt-[2.50rem] flex gap-[1.13rem]">
                  <Img
                    src="images/img_plus_thin_1.svg"
                    alt="Plusthinone"
                    className="h-[3.63rem] w-[3.63rem]"
                  />
                  <Img
                    src="images/img_image_1.svg"
                    alt="Imageone"
                    className="h-[3.63rem] w-[3.63rem]"
                  />
                  <div className="flex flex-1 rounded-[28px] bg-black-900_26 px-[2.50rem] py-[0.63rem] sm:px-[1.25rem]">
                    <Text as="p" className="w-[20%] !italic leading-[150%]">
                      {messageText}
                    </Text>
                  </div>
                  <Img
                    src="images/img_mic_1.svg"
                    alt="Micone"
                    className="h-[3.63rem] w-[3.63rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
