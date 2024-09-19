const { Heading, Text } = require("components")

const SecondSection = () => {
  return (
    <div className="mt-[9.38rem] h-[78.75rem] w-[100%] sm:mb-[50rem]">
      <div className="bottom-0 left-0 right-0 top-0 m-auto h-[77.50rem] flex-1 rounded-[50px] bg-[url(/public/images/img_group_176.png)] bg-cover bg-no-repeat px-[3.50rem] py-[4.63rem] md:h-auto md:p-[1.25rem]">
        <div className="mt-[10.25rem] flex flex-col items-start justify-center w-[98%] sm:w-full">
          <div className="mx-[0rem] flex flex-col gap-[0.63rem] justify-center items-center self-stretch md:mx-0">
            <Heading
              size="heading8xl"
              as="h1"
              className="text-shadow-ts1 font-saira text-[50px] font-semibold leading-[75px] text-left !text-blue_gray-900_03"
            >
              Explore Tech Events and Networking Hubs
            </Heading>
            <Text
              size="text12xl"
              as="p"
              // className="mr-[0.75rem] w-[82%] leading-[150%] !text-blue_gray-900_03 md:mr-0 md:w-full"
              className="px-[2.5rem] w-[72%] leading-[150%] font-saira text-[40px] font-thin leading-[75px] text-left !text-blue_gray-900_03 md:px-0 md:w-[100%] sm:w-[100%] sm:px-0 md:w-full"
            >
              Discover conferences, workshops, and networking
              opportunities across the globe, all in one place
            </Text>
          </div>
          <Text
            size="text13xl"
            as="p"
            className="mt-[19.5rem] font-saira text-[50px] font-thin leading-[75px] text-left !text-black-900"
          >
            Discover
          </Text>
          <Heading
            size="heading10xl"
            as="h2"
            className="leading-[150%] !text-black-900 font-saira text-[65px] font-semibold leading-[97.5px] text-left"
          >
            <>
              Explore Exciting Features <br /> Of Synclyfy
            </>
          </Heading>
          <Text
            size="text10xl"
            as="p"
            className="relative bottom-[4.5rem] left-[3.5rem] sm:bottom-[0rem] sm:left-[0rem] m-auto w-[55%] sm:w-full leading-[150%] font-saira text-4xl font-thin leading-12 text-left !text-black-900"
          >
            Synclyfy offers a range of powerful features designed to
            enhance your tech event experience. From creating personalized
            profiles to accessing event materials, our platform has
            everything you need to stay connected and informed.
          </Text>
        </div>
      </div>
    </div>
  )
}
export { SecondSection };