import UserProfile from "components/UserProfile";
import { Suspense } from "react";

const { Heading, Text, Img } = require("components")

const data = [
  {
    userImage: "images/img_designs.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore
        <br />
        lorem lorenkdnvd lkankaf ajlkajf
        <br />
        fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_7.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore
        <br />
        lorem lorenkdnvd lkankaf ajlkajf
        <br />
        fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_8.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore
        <br />
        lorem lorenkdnvd lkankaf ajlkajf
        <br />
        fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_design2.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore
        <br />
        lorem lorenkdnvd lkankaf ajlkajf
        <br />
        fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_design3.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore
        <br />
        lorem lorenkdnvd lkankaf ajlkajf
        <br />
        fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
];
const data1 = [
  {
    userImage: "images/img_38736494_8686784.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore <br /> lorem lorenkdnvd lkankaf ajlkajf
        <br /> fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_design5.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore <br /> lorem lorenkdnvd lkankaf ajlkajf
        <br /> fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_design6.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore <br /> lorem lorenkdnvd lkankaf ajlkajf
        <br /> fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_7_80x150.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore <br /> lorem lorenkdnvd lkankaf ajlkajf
        <br /> fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
  {
    userImage: "images/img_designs_80x150.png",
    userDescription: (
      <>
        lorem lorem loerm lorem mlore <br /> lorem lorenkdnvd lkankaf ajlkajf
        <br /> fakjfhkjahfkaffask......
      </>
    ),
    attendText: "Attend",
    viewText: "View",
  },
];

const Sponser = () => {
  return (
    <div className="ml-[5rem] mr-[5rem] mt-[11.00rem] flex flex-col items-center self-stretch rounded-[30px] bg-blue_gray-900_04 p-[1.25rem] md:ml-0 sm:mt-[5rem] sm:mb-[0rem]">
      <div className="flex w-[88%] items-center justify-center gap-[1.25rem] md:w-full md:flex-col">
        <div className="flex w-[88%] items-center justify-center md:w-full md:flex-col">
          <Img
            src="images/img_synclyfyv2_4.svg"
            alt="Synclyfyv2four"
            className="relative z-[9] h-[9.38rem] w-[9.38rem] md:w-full"
          />
          <div className="relative ml-[-0.63rem] flex flex-1 items-center justify-between gap-[1.25rem] rounded-[24px] border border-solid border-cyan-800 bg-blue_gray-100_26 px-[1.38rem] py-[0.38rem] md:ml-0 md:self-stretch sm:px-[1.25rem]">
            <Text as="p" className="ml-[1.38rem] !italic md:ml-0">
              Search Events
            </Text>
            <Img
              src="images/img_search_3.svg"
              alt="Searchtwo"
              className="h-[2.00rem] w-[2.00rem] self-end"
            />
          </div>
        </div>
        <Img
          src="images/img_mic_2.svg"
          alt="Mictwo"
          className="h-[3.13rem] w-[3.13rem] md:w-full"
        />
      </div>
      <Text
        as="p"
        className="ml-[9.00rem] self-start font-saira font-normal !italic md:ml-0"
      >
        Sponsored
      </Text>
      <div className="mx-[2.50rem] mb-[4.38rem] mt-[1.50rem] flex w-[86%] flex-col items-start md:mx-0 md:w-full">
        <div className="flex gap-[1.25rem] self-stretch md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile
                {...d}
                key={"sponcered" + index}
                className="bg-blue_gray-100_26"
              />
            ))}
          </Suspense>
        </div>
        <Text
          as="p"
          className="ml-[2.0rem] mt-[5.00rem] font-normal font-saira !italic md:ml-0"
        >
          Sort by: Followings
        </Text>
        <div className="mt-[1.38rem] flex gap-[1.25rem] self-stretch md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data1.map((d, index) => (
              <UserProfile
                {...d}
                key={"sponcered1" + index}
                className="bg-blue_gray-100"
                color="!text-black-900"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  )
}
export { Sponser };