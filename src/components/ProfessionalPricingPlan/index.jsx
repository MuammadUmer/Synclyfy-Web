import { Button, Img, Heading, Text } from "./..";
import React from "react";
export default function ProfessionalPricingPlan({
  professionalTitle = "Professional",
  price = "$199",
  priceDuration = "/month",
  organizerPageText = "Organizer Page creation",
  priorityEventText = "Priority Event Listing ",
  advancedRegistrationText = "Advanced Registration forms",
  inAppPaymentsText = "In App Payments (3% cut/ticket)",
  eventFeedbackText = "Event feedback forms",
  intermediateEventAnalyticsText = "Intermediate Event analytics",
  qrCheckInsText = "QR Check-Ins (1000)",
  virtualEventsText = "Virtual Events (8 Events/month , 60mins)",
  customDesignsText = "Custom Designs templates",
  emailSupportText = "Email Support with 48-hr response time",
  discussionBoardsText = "Discussion boards (Speaker + attendees)",
  adsAndSponsorshipsText = "Ads and Sponserships",
  embedSocialMediaText = "Embed Social media page Widgets",
  joinWaitlistButton = "Join Waitlist",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} w-[50%] md:w-full relative`}>
      <div className="mb-[10.38rem] ml-[2.38rem] h-[8.50rem] w-[76%] rounded-[24px] bg-gray-200 blur-[150.00px] backdrop-opacity-[0.5]" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[50px] border border-solid border-black-900 bg-cyan-800 px-[1.88rem] py-[2.13rem] sm:p-[1.25rem]">
        <div className="mr-[1.00rem] mt-[0.38rem] flex flex-col gap-[1.13rem]">
          <div className="ml-[0.38rem] flex flex-col items-start">
            <div className="flex items-center gap-[1.50rem] self-stretch">
              <div className="w-[22%] rounded-[44px] bg-indigo-50 px-[1.13rem]">
                <div className="mt-[0.88rem]">
                  <div className="relative z-[7] mx-[0.75rem] rounded-[14px] bg-blue_gray-900_04 p-[0.13rem]">
                    <Img
                      src="images/img_star_1_1.svg"
                      alt="Professional"
                      className="h-[1.63rem] w-[1.63rem] rounded-[3px] border-2 border-solid border-white-a700"
                    />
                  </div>
                  <Img
                    src="images/img_group_11.svg"
                    alt="Professional"
                    className="relative mt-[-1.00rem] h-[3.75rem] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start">
                <Text as="p" className="!font-poppins !font-medium">
                  {professionalTitle}
                </Text>
                <div className="flex flex-wrap items-center gap-[0.44rem] self-stretch">
                  <Heading size="heading6xl" as="h1">
                    {price}
                  </Heading>
                  <Heading
                    as="p"
                    className="mb-[0.63rem] self-end !text-gray-500_02"
                  >
                    {priceDuration}
                  </Heading>
                </div>
              </div>
            </div>
            <div className="mt-[1.88rem] h-[0.06rem] w-[86%] bg-blue_gray-50_01" />
            <div className="mt-[1.75rem] flex items-center justify-between gap-[1.25rem] self-stretch">
              <Heading as="p">{organizerPageText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem] self-stretch">
              <Heading as="p">{priorityEventText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem] self-stretch">
              <Heading as="p">{advancedRegistrationText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem] self-stretch">
              <Heading as="p">{inAppPaymentsText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem] self-stretch">
              <Heading as="p">{eventFeedbackText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-[1.25rem]">
            <Heading as="p">{intermediateEventAnalyticsText}</Heading>
            <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
              <Img src="images/img_fi_check.svg" />
            </Button>
          </div>
          <div className="ml-[0.38rem]">
            <div className="flex items-center justify-between gap-[1.25rem]">
              <Heading as="p">{qrCheckInsText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem]">
              <Heading as="p">{virtualEventsText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem]">
              <Heading as="p">{customDesignsText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem]">
              <Heading as="p">{emailSupportText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem]">
              <Heading as="p">{discussionBoardsText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[1.13rem] flex items-center justify-between gap-[1.25rem]">
              <Heading as="p">{adsAndSponsorshipsText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <div className="mt-[0.75rem] flex items-center justify-between gap-[1.25rem]">
              <Heading as="p">{embedSocialMediaText}</Heading>
              <Button shape="circle" className="w-[1.50rem] !rounded-[12px]">
                <Img src="images/img_fi_check.svg" />
              </Button>
            </div>
            <Button
              color="blue_gray_900_04"
              size="xl"
              className="ml-[2.13rem] mr-[1.63rem] mt-[3.38rem] self-stretch rounded-[24px] font-poppins font-medium"
            >
              {joinWaitlistButton}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
