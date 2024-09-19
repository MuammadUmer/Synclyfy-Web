import IconContainer from "components/IconContainer";
import UserProfile1 from "components/UserProfile1";
import { Suspense } from "react";

const { Heading, Text, Img, Button } = require("components")

const data3 = [
    {
      userImage: "images/img_participant.png",
      userName: "Lita Sherman",
      connectionIcon: "images/img_24_video.svg",
    },
    {
      userImage: "images/img_participant_204x426.png",
      userName: "Kirk Purdie",
      connectionIcon: "images/img_24_video_white_a700.svg",
    },
    {
      userImage: "images/img_participant_1.png",
      userName: "Khalid Ignác",
      connectionIcon: "images/img_24_video.svg",
    },
    {
      userImage: "images/img_participant_2.png",
      userName: "Jaana Kirstie",
      connectionIcon: "images/img_24_video_white_a700_24x24.svg",
    },
    {
      userImage: "images/img_participant.png",
      userName: "Lita Sherman",
      connectionIcon: "images/img_24_video.svg",
    },
    {
      userImage: "images/img_participant_3.png",
      userName: "Halide Nursultan",
      connectionIcon: "images/img_24_video.svg",
    },
  ];

const WorldHackerSummit = () => {
    return (
      <div className="flex w-full mt-[10.75rem] sm:mt-[3rem] ">
        <Img src={"images/virtual_events.svg"} alt="24home" className="h-[77rem] w-full sm:h-[20rem]" />
      </div>
      //   <div className="mt-[10.75rem] flex justify-center gap-[0.13rem] self-stretch rounded-[16px] border border-solid border-gray-300_01 bg-white-a700 shadow-sm md:flex-col">
      //   <div className="h-[56.25rem] w-[5%] rounded-bl-[16px] rounded-tl-[16px] bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat py-[1.00rem] md:h-auto md:w-full md:px-[1.25rem]">
      //     <div className="mb-[41.63rem] flex flex-col gap-[1.00rem]">
      //       <div className="mx-[0.88rem] rounded-[24px] border border-solid border-gray-300_01 md:mx-0">
      //         <div className="rounded-[24px] border border-solid border-gray-300_01">
      //           <Img
      //             src="images/img_settings.svg"
      //             alt="Settings"
      //             className="h-[3.00rem] w-[3.00rem] rounded-[50%]"
      //           />
      //         </div>
      //       </div>
      //       <div className="flex flex-col gap-[1.00rem]">
      //         <div className="flex flex-col gap-[1.00rem] md:flex-row">
      //           <IconContainer homeIcon="images/img_23_star_icon.svg"/>
      //           <IconContainer homeIcon="images/img_24_home.svg" />
      //         </div>
      //         <div className="flex justify-center">
      //           <div className="h-[2.13rem] w-[0.13rem] rounded-br-[1px] rounded-tr-[1px] bg-teal-700" />
      //           <div className="flex flex-1 justify-center p-[0.25rem]">
      //             <Img
      //               src="images/img_thumbs_up.svg"
      //               alt="Thumbsup"
      //               className="h-[1.50rem] w-[1.50rem]"
      //             />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="flex-1 bg-black-900 md:self-stretch md:px-[1.25rem]">
      //     <div className="flex items-center border border-solid border-gray-300_01 bg-white-a700 p-[0.50rem]">
      //       <div className="flex flex-1">
      //         <Heading
      //           size="heading3xl"
      //           as="h6"
      //           className="!font-inter !text-gray-900_03"
      //         >
      //           World Hacker Summit 2024
      //         </Heading>
      //       </div>
      //       <div className="flex w-[4%] justify-center bg-white-a700">
      //         <Button
      //           color="blue_gray_50"
      //           size="lg"
      //           shape="round"
      //           className="w-[2.50rem]"
      //         >
      //           <Img src="images/img_24_schedule.svg" />
      //         </Button>
      //       </div>
      //     </div>
      //     <div className="border-4 border-solid border-black-900 bg-black-900">
      //       <div className="flex rounded-tl-[12px] rounded-tr-[12px] bg-gray-900_01 py-[0.50rem] sm:flex-col">
      //         <div className="flex flex-1 px-[2.38rem] py-[0.38rem] sm:self-stretch sm:px-[1.25rem]">
      //           <Text size="textxl" as="p" className="!font-inter">
      //             Data strategy and executive communication
      //           </Text>
      //         </div>
      //         <div className="flex w-[16%] items-center justify-center bg-gradient3 sm:w-full sm:px-[1.25rem]">
      //           <div className="flex flex-1 justify-end gap-[0.50rem] py-[0.38rem]">
      //             <Img
      //               src="images/img_auto_added_frame.svg"
      //               alt="Autoadded"
      //               className="h-[1.00rem]"
      //             />
      //             <Text size="textmd" as="p" className="!font-inter">
      //               6 / 9
      //             </Text>
      //           </div>
      //           <div className="ml-[0.50rem] flex flex-1 items-center justify-center gap-[0.63rem] py-[0.38rem]">
      //             <Img
      //               src="images/img_contrast.svg"
      //               alt="Contrast"
      //               className="h-[0.75rem]"
      //             />
      //             <Text size="textmd" as="p" className="!font-inter">
      //               150
      //             </Text>
      //           </div>
      //           <Button
      //             color="orange_200"
      //             size="sm"
      //             className="ml-[1.00rem] min-w-[4.88rem] rounded-[12px] font-inter"
      //           >
      //             Moderated
      //           </Button>
      //         </div>
      //       </div>
      //       <div className="flex flex-col items-center gap-[7.38rem] rounded-bl-[12px] rounded-br-[12px] border-4 border-solid border-gray-900_01 bg-gray-900_01 py-[1.88rem] md:gap-[5.50rem] sm:gap-[3.69rem] sm:py-[1.25rem]">
      //         <div className="mt-[8.13rem] grid grid-cols-3 justify-center gap-[0.25rem] gap-y-[0.88rem] self-stretch md:grid-cols-2 sm:grid-cols-1">
      //           <Suspense fallback={<div>Loading feed...</div>}>
      //             {data3.map((d, index) => (
      //               <UserProfile1
      //                 {...d}
      //                 key={"gridparticipant" + index}
      //               />
      //             ))}
      //           </Suspense>
      //         </div>
      //         <div className="container-xs flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
      //           <div className="flex w-[94%] items-center justify-center md:w-full sm:flex-col">
      //             <div className="flex flex-1 items-center justify-center gap-[2.50rem] px-[3.50rem] md:px-[1.25rem] sm:flex-col sm:self-stretch">
      //               <Img
      //                 src="images/img_menu.svg"
      //                 alt="Menu"
      //                 className="mt-[0.25rem] h-[2.75rem] self-start sm:w-full sm:self-auto"
      //               />
      //               <Img
      //                 src="images/img_simplification.svg"
      //                 alt="Simplification"
      //                 className="h-[3.13rem] self-start sm:w-full sm:self-auto"
      //               />
      //               <Img
      //                 src="images/img_simplification_white_a700.svg"
      //                 alt="Simplification"
      //                 className="h-[2.75rem] w-[2.75rem] sm:w-full"
      //               />
      //               <Img
      //                 src="images/img_simplification_white_a700_44x44.svg"
      //                 alt="Simplification"
      //                 className="h-[2.75rem] w-[2.75rem] sm:w-full"
      //               />
      //               <Img
      //                 src="images/img_arrow_right.svg"
      //                 alt="Arrowright"
      //                 className="h-[3.38rem] w-[6%] object-contain sm:w-full"
      //               />
      //             </div>
      //             <Img
      //               src="images/img_image_3.png"
      //               alt="Imagethree"
      //               className="h-[3.38rem] w-[3.38rem] object-cover sm:w-full"
      //             />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="flex flex-col items-center gap-[0.50rem] rounded-br-[16px] rounded-tr-[16px] border border-solid border-gray-300_01 bg-white-a700 p-[0.50rem] md:px-[1.25rem]">
      //     <Button
      //       color="blue_gray_50"
      //       size="lg"
      //       shape="round"
      //       className="w-[2.50rem]"
      //     >
      //       <Img src="images/img_arrow_left.svg" />
      //     </Button>
      //     <Img
      //       src="images/img_user_blue_gray_50.svg"
      //       alt="User"
      //       className="h-[2.50rem] w-[2.50rem]"
      //     />
      //     <Button
      //       color="blue_gray_50"
      //       size="lg"
      //       shape="round"
      //       className="w-[2.50rem]"
      //     >
      //       <Img src="images/img_lock.svg" />
      //     </Button>
      //     <Img
      //       src="images/img_arrow_down.svg"
      //       alt="Arrowdown"
      //       className="h-[2.50rem] w-[2.50rem]"
      //     />
      //     <Button
      //       color="blue_gray_50"
      //       size="lg"
      //       shape="round"
      //       className="mb-[40.75rem] w-[2.50rem]"
      //     >
      //       <Img src="images/img_button_40.svg" />
      //     </Button>
      //   </div>
      // </div>
    )
}
export { WorldHackerSummit };