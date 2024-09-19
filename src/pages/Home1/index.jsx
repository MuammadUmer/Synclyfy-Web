import { Helmet } from "react-helmet";
import { Img, Text, Heading, Slider, Input, Button } from "../../components";
import CommunityProfile from "../../components/CommunityProfile";
import DateList from "../../components/DateList";
import IconContainer from "../../components/IconContainer";
import NetworkingGuide from "../../components/NetworkingGuide";
import UniversityCommunity from "../../components/UniversityCommunity";
import UserProfile from "../../components/UserProfile";
import UserProfile1 from "../../components/UserProfile1";
import UserProfile2 from "../../components/UserProfile2";
import UserProfile3 from "../../components/UserProfile3";
import UserProfile4 from "../../components/UserProfile4";
import UserProfileDate from "../../components/UserProfileDate";
import { ArtOfNetworking, CatBot, ChallengeAccepted, ConnectAndCollaborate, CuriousAndCelebrate, DesignMarketPlace, EventMaterial, FirstSection, FormSection, LeaderBoard, MissedIt, PerfectLocationTransport, PerfectVenue, PowerOfVirtualEvents, PromoteAndSponserYourEvent, SecondSection, Sponser, StreamLineCheckIn, Testimonials, VirtualCommunityText, WorldHackerSummit, YourPersonalizedFeed } from "./Components/index"
import React, { Suspense } from "react";


const data2 = [
  {
    userImage: "images/img_designs_150x146.png",
    viewText: "View",
    useText: "Use",
  },
  {
    userImage: "images/img_design2_150x146.png",
    viewText: "View",
    useText: "Use",
  },
  { userImage: "images/img_designs_1.png", viewText: "View", useText: "Use" },
  { userImage: "images/img_designs_2.png", viewText: "View", useText: "Use" },
  { userImage: "images/img_designs_3.png", viewText: "View", useText: "Use" },
  { userImage: "images/img_designs_4.png", viewText: "View", useText: "Use" },
  { userImage: "images/img_designs_5.png", viewText: "View", useText: "Use" },
  { userImage: "images/img_designs_6.png", viewText: "View", useText: "Use" },
];
const data4 = [
  {
    communityImage: "images/img_ellipse_3.png",
    communityName: "Speaker A",
    followText: "Follow",
    communityImageOne: "images/img_ellipse_3.png",
    communityNameOne: "Speaker A",
    followTextOne: "Follow",
  },
  {
    communityImage: "images/img_ellipse_6_36x36.png",
    communityName: "Speaker B",
    followText: "Follow",
    communityImageOne: "images/img_ellipse_6_36x36.png",
    communityNameOne: "Speaker B",
    followTextOne: "Follow",
  },
  {
    communityImage: "images/img_ellipse_7.png",
    communityName: "Speaker C",
    followText: "Follow",
    communityImageOne: "images/img_ellipse_7.png",
    communityNameOne: "Speaker C",
    followTextOne: "Follow",
  },
  {
    communityImage: "images/img_user_blue_gray_200.png",
    communityName: "Speaker D",
    followText: "Follow",
    communityImageOne: "images/img_user_blue_gray_200.png",
    communityNameOne: "Speaker D",
    followTextOne: "Follow",
  },
];
const data5 = [
  {
    communityImage: "images/img_ellipse_3.png",
    communityName: "Community A",
    followText: "Follow",
    communityImageOne: "images/img_ellipse_3.png",
    communityNameOne: "Community A",
    followTextOne: "Follow",
  },
  {
    communityImage: "images/img_ellipse_6_36x36.png",
    communityName: "Community B",
    followText: "Follow",
    communityImageOne: "images/img_ellipse_6_36x36.png",
    communityNameOne: "Community B",
    followTextOne: "Follow",
  },
  {
    communityImage: "images/img_ellipse_7.png",
    communityName: "Community C",
    followText: "Follow",
    communityImageOne: "images/img_ellipse_7.png",
    communityNameOne: "Community C",
    followTextOne: "Follow",
  },
  {
    communityImage: "images/img_user_blue_gray_200.png",
    communityName: "Community D",
    followText: "Follow",
    communityImageOne: "images/img_user_blue_gray_200.png",
    communityNameOne: "Community D",
    followTextOne: "Follow",
  },
];
const data6 = [
  {
    userImage: "images/img_avatars_3d_avatar_21.png",
    userName: "Synclyfy",
    userTime: "9:41 AM",
    userDescription: "Grab your popcorn, the tech show is live! 😋",
  },
  {
    userImage: "images/img_avatars_3d_avatar_21.png",
    userName: "Synclyfy",
    userTime: "9:41 AM",
    userDescription: "It&#39;s tech o&#39;clock! Join the fun! 💻",
  },
  {
    userImage: "images/img_background.svg",
    userName: "Synclyfy",
    userTime: "9:41 AM",
    userDescription: "Grab your popcorn, the tech show is live! 😋",
  },
  {
    userImage: "images/img_background_gray_500.svg",
    userName: "Synclyfy",
    userTime: "9:41 AM",
    userDescription: "Grab your popcorn, the tech show is live! 😋",
  },
];
const data7 = [
  { dateText: "2" },
  { dateText: "3" },
  { dateText: "4" },
  { dateText: "5" },
  { dateText: "6" },
  { dateText: "7" },
  { dateText: "8" },
  { dateText: "9" },
  { dateText: "10" },
  { dateText: "11" },
  { dateText: "12" },
  { dateText: "13" },
  { dateText: "14" },
  { dateText: "15" },
];

export default function Home1Page() {

  return (
    <>
      <Helmet>
        <title>Synclyfy</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-blue-50_01">
        <div className="relative h-auto md:h-auto">
          <div className="h-[2131.75rem] flex-1 bg-blue-50_01" />
          <div className="absolute left-0 right-0 top-[0.00rem] m-auto w-full bg-blue_gray-100_19">
            <div className="mb-[1.50rem] flex flex-col items-center">
              <div className="flex w-[98%] justify-center py-[1.88rem] md:w-full md:px-[1.25rem] sm:p-[1.25rem]">
                <div className="mb-[1.25rem] flex w-[98%] justify-center rounded-[20px] bg-gray-50_01 p-[1.13rem] md:w-full">
                  <div className="flex w-full items-start md:flex-col">
                    <Img
                      src="images/img_logonew_1.svg"
                      alt="Logonewone"
                      className="h-[3.38rem] w-[24%] object-contain md:w-full"
                    />
                    <div className="flex flex-1 items-center justify-end gap-[4.88rem] self-center md:self-stretch">
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Text
                          size="text10xl"
                          as="p"
                          className="self-end !font-normal !text-black-900"
                        >
                          Pricing
                        </Text>
                      </a>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                        target="_blank"
                      >
                        <Button
                          color="cyan_800"
                          size="3xl"
                          className="min-w-[10.50rem] rounded-[30px] font-roboto"
                        >
                          Join Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <FirstSection />
              <SecondSection />
              <YourPersonalizedFeed />

              <div className="flex flex-col w-full items-center gap-[3.88rem] sm:gap-[1.94rem]">
                <div className="flex flex-wrap justify-center gap-[0.75rem] md:w-full sm:w-full">
                  <Text
                    size="text2xl"
                    as="p"
                    className="flex items-center justify-center rounded-[10px] bg-cyan-800 px-[1.50rem] sm:px-[1.25rem]"
                  >
                    Attendee Feed
                  </Text>
                  <Text
                    size="text2xl"
                    as="p"
                    className="flex items-center justify-center rounded-[10px] bg-white-a700 !text-cyan-800 px-[1.50rem] sm:px-[1.25rem]"
                  >
                    Organizer Feed
                  </Text>
                </div>
              </div>


              <div className="container mt-[2.50rem] md:px-[1.25rem] sm: mx-[0rem]">
                <div className="flex flex-col w-full items-center gap-[3.88rem] sm:gap-[1.94rem]">
                  <div className="flex items-center  w-[92%] rounded-[50px] bg-cyan-800 px-[1.25rem] py-[1.63rem] md:flex-col sm:py-[1.25rem] sm:w-[100%] ">
                    <div className="flex w-[25%] flex-col items-center md:w-full">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="Image"
                        className="h-[5.88rem] w-[5.88rem] rounded-[38px] object-contain"
                      />
                      <div className="ml-[4.38rem] mt-[5px] mr-[3.88rem] flex items-center justify-center gap-[0.63rem] self-stretch md:mx-0">
                        <Heading size="heading4xl" as="h4" className="font-saira font-semibold text-[20px] leading-[18px]">
                          Aimal Khan
                        </Heading>
                        <Img
                          src="images/img_group_1.png"
                          alt="Image"
                          className="h-[1.13rem] w-[1.13rem] object-cover"
                        />
                      </div>
                      <Text
                        size="textxl"
                        as="p"
                        className="font-inter mt-[6px] text-[14px] font-light leading-[18px]"
                      >
                        Social Nerd
                      </Text>
                      <Text
                        size="textmd"
                        as="p"
                        className="mt-[0.63rem] font-inter text-[12px] font-light leading-[18px] text-center"
                      >
                        Missing tech events is Crime
                      </Text>
                      <div className="mt-[1.75rem] flex flex-col items-center self-stretch">
                        <div className="flex flex-wrap justify-between gap-[1.25rem] self-stretch">
                          <Text
                            size="textmd"
                            as="p"
                            className="w-[40%] text-center !font-inter leading-[1.00rem]"
                          >
                            <span className="text-[15px] font-semibold leading-[16px] text-center">
                              <>
                                120 <br />
                              </>
                            </span>
                            <span className="text-[13px] pt-[6px] leading-[16px] font-light">
                              Events Attended
                            </span>
                          </Text>
                          <Text
                            size="textmd"
                            as="p"
                            className="w-[20%] text-center !font-inter !font-medium leading-[1.00rem]"
                          >
                            <span className="text-[15px] font-semibold leading-[16px] text-center">
                              <>
                                99.5k <br />
                              </>
                            </span>
                            <span className="text-[13px] pt-[6px] leading-[16px] font-light">Followers</span>
                          </Text>
                          <Text
                            size="textmd"
                            as="p"
                            className="w-[20%] text-center !font-inter !font-medium leading-[1.00rem]"
                          >
                            <span className="text-[13px] font-semibold leading-[16px] text-center">
                              <>
                                30 <br />
                              </>
                            </span>
                            <span className="text-[12px] pt-[6px] leading-[16px] font-light">Hosted&nbsp;</span>
                          </Text>
                        </div>
                        <div className="ml-[0.38rem] mr-[0.88rem] mt-[1.38rem] h-[0.00rem] self-stretch bg-blue_gray-700_87 md:mx-0" />
                        <div className="ml-[0.38rem] mr-[0.88rem] mt-[1.88rem] self-stretch md:mx-0">
                          <div className="px-[13px] py-[5px] mt-[0.75rem] rounded-lg bg-blue_gray-900 flex items-center gap-[0.44rem] md:mx-0">
                            <Img
                              src="images/img_user_interface_house.svg"
                              alt="User Interface / House"
                              className="h-[2.50rem] w-[2.50rem]"
                            />
                            <Text
                              size="text5xl"
                              as="p"
                              className="!font-inter !font-normal"
                            >
                              Feed
                            </Text>
                          </div>
                          <div className="mx-[0.50rem] mt-[0.75rem] ml-[0.85rem] flex items-center gap-[0.44rem] md:mx-0">
                            <Img
                              src="images/img_globe_1.svg"
                              alt="Globeone"
                              className="h-[2.50rem] w-[2.50rem]"
                            />
                            <Text
                              size="text5xl"
                              as="p"
                              className="!font-inter  !font-normal"
                            >
                              Events
                            </Text>
                          </div>

                          <div className="mx-[0.50rem] mt-[0.75rem] ml-[0.85rem] flex items-center gap-[0.44rem] md:mx-0">
                            <Img
                              src="images/img_chat_chat.svg"
                              alt="Chatchat"
                              className="h-[2.50rem] w-[2.50rem]"
                            />
                            <Text
                              size="text5xl"
                              as="p"
                              className="!font-inter  !font-normal"
                            >
                              Messages
                            </Text>
                          </div>
                          <Button
                            color="black_900_26"
                            size="md"
                            shape="round"
                            className="my-[0.25rem] mt-[0.75rem] w-full font-inter font-normal"
                          >
                            More...
                          </Button>
                        </div>
                        <div className="mr-[0.88rem] mt-[1.50rem] mb-[1rem] h-[1px] self-stretch bg-white-a700 md:mr-0" />
                        <div className="pl-[0.38rem] pr-[0.88rem] flex justify-between items-center w-full">
                          <div>
                            <span className="text-white-a700 font-saira font-normal text-[18px]">Skills</span>
                          </div>
                          <div>
                            <span className="font-inter font-light text-gray-400 text-[18px]">
                              View All
                            </span>
                          </div>
                        </div>
                        <div className="mr-[0.88rem] mt-[3.50rem] mb-[1rem] h-[1px] self-stretch bg-white-a700 md:mr-0" />
                        <div className="pl-[0.38rem] pr-[0.88rem] flex justify-between items-center w-full">
                          <div>
                            <span className="text-white-a700 font-saira font-normal text-[18px]">Education</span>
                          </div>
                          <div>
                            <span className="font-inter  font-light text-gray-400 text-[18px]">
                              View All
                            </span>
                          </div>
                        </div>
                        <div className="mr-[0.88rem] mt-[3.50rem] mb-[1rem] h-[1px] self-stretch bg-white-a700 md:mr-0" />
                        <div className="pl-[0.38rem] pr-[0.88rem] flex justify-between items-center w-full">
                          <div>
                            <span className="text-white-a700 font-saira font-normal text-[18px]">Occupation</span>
                          </div>
                          <div>
                            <span className="font-inter font-light text-gray-400 text-[18px]">
                              View All
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center rounded-[40px] border-2 border-solid border-blue_gray-700_01 bg-blue_gray-800 md:flex-col md:self-stretch md:px-[1.25rem]">
                      <div className="flex flex-1 flex-col items-end md:self-stretch">
                        <div className="relative z-[3] flex items-start justify-between items-center self-stretch sm:flex-col">
                          {/* <div className="relative ml-[-1.38rem] mt-[2.63rem] flex flex-1 items-center justify-end gap-[0.75rem] sm:ml-0 sm:flex-col sm:self-stretch"> */}
                          <Img
                            src="images/img_synclyfyv2_4.svg"
                            alt="Synclyfyv2two"
                            className="relative z-[4] h-[7.50rem] w-[5.50rem] self-center object-cover sm:w-full"
                          />
                          <div className="flex flex-1 items-center justify-between gap-[1.25rem] rounded-[18px] border border-solid border-white-a700 px-[0.75rem] py-[0.25rem] sm:self-stretch">
                            <Text
                              size="text4xl"
                              as="p"
                              className="ml-[0.50rem] font-saira font-normal !italic md:ml-0"
                            >
                              search
                            </Text>
                            <Img
                              src="images/img_search_3.svg"
                              alt="Searchthree"
                              className="h-[1.50rem] w-[1.50rem]"
                            />
                          </div>
                          <Img
                            src="images/img_bi_mic.svg"
                            alt="Bimic"
                            className="h-[1.88rem] w-[1.88rem] ml-[5px] sm:w-full sm:self-auto"
                          />
                        </div>
                        {/* </div> */}
                        <div className="flex w-[94%] flex-col gap-[0.63rem] md:w-full">
                          <div className="flex flex-col gap-[1.00rem] rounded-[12px] bg-blue_gray-100_19 px-[1.00rem] py-[1.13rem] shadow-xs">
                            <div className="flex items-center justify-center gap-[0.63rem] sm:flex-col">
                              <Img
                                src="images/img_ellipse_6.png"
                                alt="Image"
                                className="h-[2.13rem] w-[2.13rem] rounded-[16px] object-cover sm:w-full"
                              />
                              <div className="flex flex-1 items-center justify-between gap-[1.25rem] self-end rounded-[5px] border border-solid border-gray-500_05 bg-gray-900_04 px-[0.75rem] py-[0.25rem] sm:self-stretch">
                                <Text
                                  size="textmd"
                                  as="p"
                                  className="!font-inter !font-medium !text-gray-500_01"
                                >
                                  What is happening!?
                                </Text>
                                <Img
                                  src="images/img_bi_mic_gray_500_01.svg"
                                  alt="Bimic"
                                  className="h-[0.88rem] w-[0.88rem]"
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="flex flex-1 items-center">
                                <Img
                                  src="images/img_image_03.svg"
                                  alt="Imagethree"
                                  className="h-[1.00rem] w-[1.00rem]"
                                />
                                <Heading
                                  size="texts"
                                  as="p"
                                  className="ml-[0.25rem] !font-inter !text-gray-500_01"
                                >
                                  Media Content
                                </Heading>
                                <Img
                                  src="images/img_fluent_emoji_hi.svg"
                                  alt="Fluentemojihi"
                                  className="ml-[0.50rem] h-[1.00rem] w-[1.00rem]"
                                />
                                <Heading
                                  size="texts"
                                  as="p"
                                  className="ml-[0.25rem] self-end !font-inter !text-gray-500_01"
                                >
                                  Hashtags
                                </Heading>
                                <Img
                                  src="images/img_file_and_folder.svg"
                                  alt="Fileandfolder"
                                  className="ml-[0.63rem] h-[1.13rem] w-[1.13rem]"
                                />
                                <Heading
                                  size="texts"
                                  as="p"
                                  className="ml-[0.25rem] !font-inter !text-gray-500_01"
                                >
                                  Schedule
                                </Heading>
                              </div>
                              <Heading
                                size="headingxs"
                                as="p"
                                className="flex items-center justify-center rounded-lg bg-blue_gray-400_02 px-[1.13rem] py-[0.13rem] !font-inter !text-gray-300"
                              >
                                Post
                              </Heading>
                            </div>
                          </div>
                          <div className="flex items-center gap-[0.56rem]">
                            <Text
                              size="textlg"
                              as="p"
                              className="!font-inter !font-medium !text-gray-400_01"
                            >
                              <span>Sort by:&nbsp;</span>
                              <span className="font-semibold">Following</span>
                            </Text>
                            <Img
                              src="images/img_icon_park_solid_down_one.svg"
                              alt="Iconparksolid"
                              className="h-[0.50rem] w-[0.50rem] self-end"
                            />
                          </div>
                          <div className="flex flex-col gap-[1.50rem] rounded-[12px] bg-blue_gray-100_19 px-[0.50rem] py-[0.63rem]">
                            <div className="ml-[0.50rem] mr-[1.13rem] flex flex-col items-start md:mx-0">
                              <div className="flex items-center self-stretch sm:flex-col">
                                <div className="flex flex-1 items-center sm:self-stretch">
                                  <Img
                                    src="images/img_ellipse_6_36x36.png"
                                    alt="Image"
                                    className="h-[2.25rem] w-[2.25rem] rounded-[18px] object-cover"
                                  />
                                  <div className="relative h-[2.38rem] flex-1 content-center px-[0.38rem] md:h-auto">
                                    <Heading
                                      size="headings"
                                      as="p"
                                      className="!font-inter leading-[1.19rem]"
                                    >
                                      <span>
                                        <>
                                          Ali <br />
                                        </>
                                      </span>
                                      <span className="font-inter text-[13px] font-light">
                                        Blockchain expert
                                      </span>
                                    </Heading>
                                    <Img
                                      src="images/img_group_1.png"
                                      alt="Vector"
                                      className="absolute left-[8%] ml-[3px] top-[0.25rem] m-auto h-[0.75rem] w-[0.75rem] object-cover"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_user.svg"
                                  alt="User"
                                  className="h-[3.00rem] w-[3.00rem] sm:w-full"
                                />
                              </div>
                              <Img
                                src="images/img_rectangle_5.png"
                                alt="Image"
                                className="mr-[0.38rem] mt-[0.38rem] h-[18.88rem] w-full rounded-[14px] object-cover md:mr-0 md:h-auto"
                              />
                              <Text
                                size="textmd"
                                as="p"
                                className="ml-[0.25rem] mt-[1.63rem] w-[66%] leading-[1.13rem] md:ml-0 md:w-full"
                              >
                                Excited to share my insights at today’s event!
                                Let’s connect and inspire each other. 🎤
                                #TechEvents #Synclyfy
                              </Text>
                            </div>
                            <div className="flex flex-wrap items-center">
                              <Img
                                src="images/img_offer.svg"
                                alt="Offer"
                                className="relative z-[1] h-[2.50rem] w-[2.50rem]"
                              />
                              <Text
                                size="textmd"
                                as="p"
                                className="relative mb-[0.50rem] ml-[-0.25rem] self-end !font-inter"
                              >
                                1.16m
                              </Text>
                              <Img
                                src="images/img_camera.svg"
                                alt="Camera"
                                className="relative z-[2] ml-[0.50rem] h-[2.50rem] w-[2.50rem]"
                              />
                              <Text
                                size="textmd"
                                as="p"
                                className="relative mb-[0.50rem] ml-[-0.13rem] self-end !font-inter"
                              >
                                30.6k
                              </Text>
                              <Img
                                src="images/img_question.svg"
                                alt="Question"
                                className="ml-[0.63rem] h-[2.50rem] w-[2.50rem]"
                              />
                              <Text
                                size="textmd"
                                as="p"
                                className="relative mb-[0.50rem] ml-[-0.25rem] self-end !font-inter"
                              >
                                22.4k
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-[1.88rem] h-[51.50rem] w-[0.06rem] bg-blue_gray-700_01 md:ml-0 md:h-[0.06rem] md:w-[51.50rem] md:px-[1.25rem]" />
                      <div className="flex flex-col items-center md:w-full">
                        <Heading size="text5xl" as="p" className="font-medium font-saira mt-[2.3rem]">
                          Follow Communities
                        </Heading>
                        <div className="mx-[1.63rem] mt-[0.6rem] flex flex-col gap-[0.01rem] self-stretch md:mx-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data5.map((d, index) => (
                              <CommunityProfile
                                {...d}
                                key={"listcommunitya" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                        <div className="relative ml-[0.63rem] mr-[0.88rem] mt-[1.13rem] h-[2.25rem] content-center self-stretch rounded-lg bg-cyan-800 shadow-md md:mx-0 md:h-auto">
                          <a
                            href="#"
                            className="text-shadow-ts4 absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center rounded-lg bg-cyan-800 sm:px-[1.25rem]"
                          >
                            <Text
                              size="text2xl"
                              as="p"
                              className="px-[2.13rem] py-[0.38rem] !font-inter !font-medium"
                            >
                              View more
                            </Text>
                          </a>
                        </div>
                        <div className="h-[0.15rem] mt-[2.3rem] w-full self-stretch bg-blue_gray-700_87" />
                        <Heading size="text5xl" as="p" className="font-medium font-saira mt-[1rem]">
                          Follow Speakers
                        </Heading>
                        <div className="mx-[1.63rem] mt-[0.6rem] flex flex-col gap-[0.01rem] self-stretch md:mx-0">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data4.map((d, index) => (
                              <CommunityProfile
                                {...d}
                                key={"listcommunitya" + index}
                              />
                            ))}
                          </Suspense>
                        </div>
                        <div className="relative ml-[0.63rem] mr-[0.88rem] mt-[1.13rem] h-[2.25rem] content-center self-stretch rounded-lg bg-cyan-800 shadow-md md:mx-0 md:h-auto">
                          <a
                            href="#"
                            className="text-shadow-ts4 absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center rounded-lg bg-cyan-800 sm:px-[1.25rem]"
                          >
                            <Text
                              size="text2xl"
                              as="p"
                              className="px-[2.13rem] py-[0.38rem] !font-inter !font-medium"
                            >
                              View more
                            </Text>
                          </a>
                        </div>
                        <div className="h-[0.15rem] mt-[1rem] mb-[.5rem] w-full self-stretch bg-blue_gray-700_87" />
                        <div className="mt-[.1rem] mb-[1rem] flex flex-col items-center justify-center w-full">
                          <div className="mt-[0.75rem] h-[0.00rem] w-full self-stretch bg-blue_gray-700_87" />
                          <div className="mx-[1.13rem] mt-[1.75rem] flex flex-wrap justify-center gap-[1.25rem] self-stretch md:mx-0">
                            <Text
                              size="textxl"
                              as="p"
                              className="font-inter font-extralight"
                            >
                              About
                            </Text>
                            <Text
                              size="textxl"
                              as="p"
                              className="font-inter font-extralight"
                            >
                              Accessibility
                            </Text>
                            <Text
                              size="textxl"
                              as="p"
                              className="font-inter font-extralight"
                            >
                              Help Center
                            </Text>
                          </div>
                          <div className="mx-[1.75rem] mt-[0.25rem] flex flex-wrap justify-center gap-[1.25rem] self-stretch md:mx-0">
                            <Text
                              size="textxl"
                              as="p"
                              className="font-inter font-extralight"
                            >
                              Privacy and Terms
                            </Text>
                            <Text
                              size="textxl"
                              as="p"
                              className="font-inter font-extralight"
                            >
                              Advertising
                            </Text>
                          </div>
                          <Text
                            size="textxl"
                            as="p"
                            className="mt-[0.25rem] font-inter font-extralight"
                          >
                            Business Services
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[16.50rem] mx-[0rem] flex w-[100%] pr-[2.0rem] flex-col items-start md:w-full md:px-[1.25rem] sm:mt-[5.50rem]">
                <div className=" mx-[0rem] flex w-[80%] pr-[2.0rem] pl-[4.5rem] flex-col items-end md:w-full md:px-[1.25rem] sm:px-[0.3rem]">
                  <Heading
                    size="heading9xl"
                    as="h1"
                    className="w-full leading-[150%] font-saira font-semibold !text-black-900"
                  >
                    Effortless Registration, Payments, and Real-Time Analytics
                  </Heading>
                  <Text
                    size="text10xl"
                    as="p"
                    className="relative mr-[3.13rem] mt-[-4rem] w-[62%] leading-[150%] !text-black-900 font-saira text-[32px] font-thin leading-12 text-left md:mr-0 md:w-full sm:mt-[0.75rem]"
                  >
                    <span className="">Streamline event management with easy</span>
                    <span className="font-normal leading-[48px] font-saira">
                      &nbsp;in-app registration and payments. Track attendee data
                      and gain real-time insights
                    </span>
                    <span>&nbsp;for a smooth, efficient experience.</span>
                  </Text>
                </div>
              </div>

              <div className="mt-[7.50rem] flex flex-col items-center md:px-[1.25rem]">
                <FormSection />
                <PromoteAndSponserYourEvent />
                <Sponser />
                <PowerOfVirtualEvents />
              </div>
              <WorldHackerSummit />
              <StreamLineCheckIn />
              <PerfectVenue />
              <DesignMarketPlace />
              <PerfectLocationTransport />
              <EventMaterial />
              <MissedIt />
              <CuriousAndCelebrate />
              <ConnectAndCollaborate />
              <ChallengeAccepted />
              <VirtualCommunityText />
              <UniversityCommunity />
              <LeaderBoard />
              <CatBot />
              <ArtOfNetworking />
              {/* <Testimonials /> */}
              <div className="container-xs mt-[15.00rem] md:px-[1.25rem]">
                <div className="flex flex-col items-center gap-[3.00rem]">
                  <div className="flex h-[24.00rem] items-center justify-center self-stretch bg-[url(/public/images/img_group_178.svg)] bg-cover bg-no-repeat px-[3.50rem] py-[5.75rem] md:h-auto md:p-[1.25rem]">
                    <div className="flex w-[78%] justify-end py-[0.63rem] md:w-full">
                      <Text
                        size="text14xl"
                        as="p"
                        className="w-[92%] font-light font-saira leading-[150%]"
                      >
                        Discover The Most Exciting Tech Events Near You
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-[30%] justify-center px-[3.50rem] md:w-full md:px-[1.25rem]">
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <div className="flex flex-col items-start justify-center py-[0.75rem]">
                        <div className="relative inline-block">
                          {/* Text Shadow Effect */}
                          <span className="absolute inset-0 text-cyan-800 opacity-20 blur-md">
                            Get Started-It’s Free
                          </span>

                          {/* Main Text */}
                          <Heading
                            as="p"
                            className="relative z-10 rounded-[30px] border-[0.25px] border-solid border-cyan-800 py-[1.38rem] pl-[0.75rem] pr-[0.75rem] !font-roboto !font-normal text-teal-500 !text-cyan-800 sm:py-[1.25rem]"
                          >
                            Get Started-It’s Free
                          </Heading>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-[10.00rem] flex flex-col self-stretch">

                <div className="relative mt-[-2.38rem] h-[6.00rem] content-center md:h-auto">
                  <div className="flex flex-col gap-[8px] w-full items-center flex-center">
                    <div className="flex justify-between  items-center w-full">
                      <div>
                        <Img
                          src="images/img_logonew_1.svg"
                          alt="Logonewone"
                          className="ml-[2.25rem] h-[3.38rem] md:ml-0"
                        />
                      </div>
                      <div className="flex flex-center gap-[3px] px-[2.00rem] md:px-[1.25rem]">
                        <Img
                          src="images/img_mail.svg"
                          alt="Mail"
                          className="h-[2.63rem] w-[2.63rem]"
                        />
                        <Img
                          src="images/img_link.svg"
                          alt="Link"
                          className="h-[2.63rem] w-[2.63rem]"
                        />
                        <Img
                          src="images/img_info.svg"
                          alt="Info"
                          className="h-[2.63rem] w-[2.63rem]"
                        />
                        <Img
                          src="images/img_facebook.svg"
                          alt="Facebook"
                          className="h-[2.63rem] w-[2.63rem]"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_line.png"
                      alt="Line"
                      className="relative mt-[-0.13rem] h-[0.1rem] w-full object-cover md:h-auto"
                    />
                    <div>
                      <Text
                        as="p"
                        className="self-end !font-roboto !text-cyan-800"
                      >
                        © 2024 Synclyfy. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
