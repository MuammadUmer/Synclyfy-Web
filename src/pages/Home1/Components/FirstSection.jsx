const { Heading, Text, Button } = require("components")

const FirstSection = () => {
    return (
        
        <div className="mt-[5.50rem] sm:right-[3%] top-0 my-auto flex h-[40.88rem] w-[100%] rounded-[50px] bg-[url(/public/images/img_group_177.png)] bg-center bg-no-repeat px-[3.50rem] py-[17.00rem] md:h-auto md:p-[1.25rem] sm:w-full sm:h-auto sm:p-[1.25rem] sm:mt-[0rem]">
        <div className="mt-[6.88rem] flex items-end justify-end py-[0.88rem] pt-[0rem] sm:mt-[0rem] sm:flex-center">
          <div className="mt-[5.88rem] w-[64%] sm:w-full flex flex-col items-center sm:mt-[0rem] sm:flex-center">
            <div className="w-full mb-[2.5rem] sm:w-full rounded-[20px] bg-teal-700_26 px-[0.88rem] py-[1.25rem]">
              <Text
                size="text11xl"
                as="p"
                className="w-[96%] leading-[150%] !text-cyan-800"
              >
                <span>Unite with tech enthusiasts worldwide on&nbsp;</span>
                <span className="font-semibold">Synclyfy</span>
                <span>
                  . Discover personalized events, connect with vibrant
                  communities, and network seamlessly—all in one powerful
                  platform. Stay ahead in the tech world, right here.
                </span>
              </Text>
            </div>
            <div className="">
              <Button
                color="cyan_800"
                size="4xl"
                className="min-w-[11.63rem] rounded-[30px] font-roboto font-normal"
              >
                Get Started - it’s free
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
}
export { FirstSection };