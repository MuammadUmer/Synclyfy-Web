const { Heading, Text } = require("components")

const PowerOfVirtualEvents = () => {
    return (
        <div className="flex flex-col w-full items-center ">
            <Heading
                size="heading9xl"
                as="h1"
                className="mt-[30.50rem] font-saira font-semibold !text-black-900 sm:mt-[5rem]"
            >
                Unlock the Power of Virtual Events
            </Heading>
            <div className="ml-[13.25rem] mr-[12.00rem] mt-[1.25rem] font-Saira self-stretch px-[0.63rem] md:mx-0 sm:px-[0rem] sm:py-[0rem]">
                <Text
                    size="text10xl"
                    as="p"
                    className="mt-[0.63rem] text-center leading-[150%] font-S\zaira font-thin !text-black-900"
                >
                    Explore, connect, and grow with Synclyfy&#39;s dynamic
                    virtual events. Whether you&#39;re looking to network,
                    learn, or showcase your skills, our platform offers the
                    perfect space to engage with industry leaders and peers.
                    Dive in and make the most of every opportunity!
                </Text>
            </div>
        </div>
    )
}
export { PowerOfVirtualEvents };