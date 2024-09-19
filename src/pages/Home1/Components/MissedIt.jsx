import DateList from "components/DateList";
import UserProfile3 from "components/UserProfile3";
import UserProfileDate from "components/UserProfileDate";
import { Suspense } from "react";

const { Heading, Text, Img } = require("components")

const data6 = [
  {
    userImage: "images/img_avatars_3d_avatar_21.png",
    userName: "Synclyfy",
    userTime: "9:44 AM",
    userDescription: "Grab your popcorn, the tech show is live! 😋",
  },
  {
    userImage: "images/img_avatars_3d_avatar_21.png",
    userName: "Synclyfy",
    userTime: "9:43 AM",
    userDescription: "It's tech o'clock! Join the fun! 💻",
  },
  {
    userImage: "images/img_background.svg",
    userName: "Synclyfy",
    userTime: "9:42 AM",
    userDescription: "Hold onto your gadgets, it's almost time!",
  },
  {
    userImage: "images/img_background_gray_500.svg",
    userName: "Synclyfy",
    userTime: "9:39 AM",
    userDescription: "Nerd alert! Event in sight!",
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

const MissedIt = () => {
  return (
    <div className="container-xs mt-[26.00rem] px-[1.75rem] md:px-[1.25rem]">
      <div className="ml-[1.25rem] flex flex-col items-center md:ml-0">
        <Heading
          size="heading10xl"
          as="h1"
          className="!text-black-900 font-saira"
        >
          Missed it? Never miss out again!
        </Heading>
        <Text
          size="text10xl"
          as="p"
          className="w-[66%] leading-[150%] !text-black-900 md:w-full"
        >
          <span className="font-thin">Stay in the tech loop! Get hilarious</span>
          <span className="font-normal">
            &nbsp;push notifications&nbsp;
          </span>
          <span className="font-thin">
            about the coolest tech events near you or anywhere you
            like. Plus, sync these events straight to your&nbsp;
          </span>
          <span className="font-normal">
            calendar&nbsp;
          </span>
          <span className="font-thin">
            so you’ll never miss a beat!
          </span>
        </Text>
        <div className="mt-[3.00rem] h-[43.50rem] self-stretch rounded-[50px] bg-[url(/public/images/img_notification.png)] bg-cover bg-no-repeat px-[0.88rem] py-[3.88rem] md:h-auto md:py-[1.25rem]">
          <div className="mt-[3.88rem]">
            <div className="flex items-start justify-center md:flex-col">
              <div className="relative mt-[6.38rem] h-[25.50rem] w-[65%] self-end md:w-full md:self-auto">
                <div className="absolute bottom-0 left-[0.00rem] top-0 my-auto h-[24.63rem] w-[56%] rounded-[30px] bg-gray-400_19" />
                <div className="absolute bottom-0 left-0 right-0 top-0 mx-[2.00rem] my-auto flex h-max flex-1 flex-col items-start md:mx-0">
                  <div className="mt-[0.75rem] w-[60%] rounded-[12px] md:w-full">
                    <img src="images/calender.svg" height="5rem" />
                    <img src="images/Notification_Collapsed.svg" color="white" height="5rem" />
                  </div>
                </div>
              </div>
              <div className="w-[34%] rounded-[24px] bg-gradient4 md:w-full">
                <div className="flex flex-col gap-[0.50rem]">
                  <Suspense fallback={<div>Loading feed...</div>}>
                  
                    {data6.map((d, index) => (
                      <UserProfile3
                        {...d}
                        key={"listsynclyfy" + index}
                        className="rounded-[24px] bg-gray-500"
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { MissedIt };

// return (
//   <div className="container-xs mt-[26.00rem] px-[1.75rem] md:px-[1.25rem]">
//     <div className="ml-[1.25rem] flex flex-col items-center md:ml-0">
//       <Heading
//         size="heading10xl"
//         as="h1"
//         className="!text-black-900 font-saira"
//       >
//         Missed it? Never miss out again!
//       </Heading>
//       <Text
//         size="text10xl"
//         as="p"
//         className="w-[66%] leading-[150%] !text-black-900 md:w-full"
//       >
//         <span className="font-thin">Stay in the tech loop! Get hilarious</span>
//         <span className="font-normal">
//           &nbsp;push notifications&nbsp;
//         </span>
//         <span className="font-thin">
//           about the coolest tech events near you or anywhere you
//           like. Plus, sync these events straight to your&nbsp;
//         </span>
//         <span className="font-normal">
//           calendar&nbsp;
//         </span>
//         <span className="font-thin">
//           so you’ll never miss a beat!
//         </span>
//       </Text>
//       <div className="mt-[3.00rem] h-[43.50rem] self-stretch rounded-[50px] bg-[url(/public/images/img_notification.png)] bg-cover bg-no-repeat px-[0.88rem] py-[3.88rem] md:h-auto md:py-[1.25rem]">
//         <div className="mt-[3.88rem]">
//           <div className="flex items-start justify-center md:flex-col">
//             <div className="relative mt-[6.38rem] h-[25.50rem] w-[65%] self-end md:w-full md:self-auto">
//               <div className="absolute bottom-0 left-[0.00rem] top-0 my-auto h-[24.63rem] w-[56%] rounded-[30px] bg-gray-400_19" />
//               <div className="absolute bottom-0 left-0 right-0 top-0 mx-[2.00rem] my-auto flex h-max flex-1 flex-col items-start md:mx-0">
//                 <div className="mt-[0.75rem] w-[68%] rounded-[12px] md:w-full">
//                   <div className="flex items-start justify-center">
//                     <div className="flex flex-1 items-center">
//                       <Heading
//                         size="heading2xl"
//                         as="h6"
//                         className="tracking-[0.00rem] !text-black-900"
//                       >
//                         Oct 2024
//                       </Heading>
//                       {/* <Img
//                         src="images/defaultNoData.png"
//                         alt="Disclosure"
//                         className="h-[1.38rem]"
//                       /> */}
//                     </div>
//                     {/* <div className="mt-[0.25rem] flex gap-[2.06rem] self-end">
//                       <Img
//                         src="images/defaultNoData.png"
//                         alt="Previous"
//                         className="h-[1.88rem]"
//                       />
//                       <Img
//                         src="images/defaultNoData.png"
//                         alt="Next"
//                         className="h-[1.88rem] object-cover"
//                       />
//                     </div> */}
//                   </div>
//                   <div className="flex flex-wrap justify-center px-[1.13rem]">
//                     <Text
//                       size="textlg"
//                       as="p"
//                       className="uppercase !text-gray-800"
//                     >
//                       sun
//                     </Text>
//                     <Text
//                       size="textlg"
//                       as="p"
//                       className="ml-[1.25rem] uppercase !text-gray-800"
//                     >
//                       mon
//                     </Text>
//                     <Text
//                       size="textlg"
//                       as="p"
//                       className="ml-[1.25rem] uppercase !text-gray-800"
//                     >
//                       tue
//                     </Text>
//                     <Text
//                       size="textlg"
//                       as="p"
//                       className="ml-[1.25rem] uppercase !text-gray-800"
//                     >
//                       wed
//                     </Text>
//                     <Text
//                       size="textlg"
//                       as="p"
//                       className="ml-[1.25rem] uppercase !text-gray-800"
//                     >
//                       thu
//                     </Text>
//                     <Text
//                       size="textlg"
//                       as="p"
//                       className="ml-[1.50rem] uppercase !text-gray-800"
//                     >
//                       fri
//                     </Text>
//                     <Text
//                       size="textlg"
//                       as="p"
//                       className="ml-[1.63rem] uppercase !text-gray-800"
//                     >
//                       sat
//                     </Text>
//                   </div>
//                   <div className="relative mt-[-0.13rem] flex flex-col gap-[0.38rem]">
//                     <div className="grid grid-cols-7 justify-center gap-[0.13rem] gap-y-[0.38rem] px-[1.00rem] md:grid-cols-4 sm:grid-cols-1">
//                       <Suspense
//                         fallback={<div>Loading feed...</div>}
//                       >
//                         {data7.map((d, index) => (
//                           <UserProfileDate
//                             {...d}
//                             key={"griddate" + index}
//                           />
//                         ))}
//                       </Suspense>
//                     </div>
//                     <div className="flex flex-col gap-[0.38rem]">
//                       <DateList />
//                       <DateList
//                         dateSixteenth="23"
//                         dateSeventeenth="24"
//                         dateEighteenth="25"
//                         dateNineteenth="26"
//                         dateTwentieth="27"
//                         dateTwentySecond="29"
//                       />
//                     </div>
//                     <div className="px-[1.00rem]">
//                       <div className="flex flex-col items-start px-[0.63rem]">
//                         <Text as="p" className="tracking-[0.00rem]">
//                           30
//                         </Text>
//                       </div>
//                     </div>
//                     <Img
//                       src="images/img_frame.svg"
//                       alt="Image Thirteen"
//                       className="h-[0.63rem]"
//                     />
//                   </div>
//                   <div className="flex items-center justify-center px-[1.00rem]">
//                     <Text
//                       size="text4xl"
//                       as="p"
//                       className="tracking-[0.00rem] !text-black-900"
//                     >
//                       Starts
//                     </Text>
//                     <div className="flex flex-1 justify-end gap-[0.56rem] py-[0.25rem]">
//                       <Text
//                         size="text4xl"
//                         as="p"
//                         className="flex items-center justify-center rounded-md bg-gray-600_1e py-[0.13rem] pl-[1.00rem] pr-[0.63rem] tracking-[0.00rem] !text-black-900"
//                       >
//                         12:00
//                       </Text>
//                       <div className="flex w-[42%] justify-center rounded-lg bg-gray-600_1e">
//                         <Heading
//                           size="headings"
//                           as="p"
//                           className="text-shadow-ts3 flex items-center justify-center rounded-md border-[0.5px] border-solid border-black-900_0a bg-white-a700 px-[1.00rem] py-[0.13rem] !font-semibold tracking-[0.00rem] !text-black-900"
//                         >
//                           AM
//                         </Heading>
//                         <div className="flex w-full justify-center">
//                           <Text
//                             size="textlg"
//                             as="p"
//                             className="tracking-[0.00rem] !text-black-900"
//                           >
//                             PM
//                           </Text>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[34%] rounded-[24px] bg-gradient4 md:w-full">
//               <div className="flex flex-col gap-[0.50rem]">
//                 <Suspense fallback={<div>Loading feed...</div>}>
//                   {data6.map((d, index) => (
//                     <UserProfile3
//                       {...d}
//                       key={"listsynclyfy" + index}
//                       className="rounded-[24px] bg-gray-500"
//                     />
//                   ))}
//                 </Suspense>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )