const { Heading, Text, Img } = require("components")

const PerfectLocationTransport = () => {
    return (
        <>
            <div className="ml-[0rem] mr-[9.25rem] mt-[26.13rem] flex flex-col items-start justify-start w-[70%] md:mx-0">
                <Heading
                    size="heading10xl"
                    as="h1"
                    className="w-full leading-[150%] !text-black-900"
                >
                    Explore, Get The Exact Location, plus Transport!
                </Heading>
                <Text
                    size="text10xl"
                    as="p"
                    className="relative left-[23rem] mb-[2.88rem] mr-[0.75rem] mt-[-3.73rem] w-[64%] leading-[150%] !text-black-900 font-thin md:mr-0 md:w-full"
                >
                    With our location feature, you can easily find the exact
                    venue for the event on the map. We also offer convenient
                    transport options for your ease.
                </Text>
            </div>

            <div className="flex flex-center w-full">
                <div className="flex h-[51.50rem] w-[100%]">
                    <Img
                        src="images/img_map1_1.png"
                        alt="Map1one"
                        className="relative z-10 left-[20%] top-[10%] m-auto h-[37.50rem] w-[32%] object-contain"
                    />
                    <Img
                        src="images/img_26651648_107_1.png"
                        alt="Image Twelve"
                        className="relative bottom-0 left-[1%] z-0 top-0 my-auto h-[48.38rem] w-[100%] rounded-[50px] object-contain"
                    />
                    <Img
                        src="images/img_map2_1.png"
                        alt="Map2one"
                        className="relative z-10 right-[19%] bottom-[10%] m-auto h-[38.13rem] w-[30%] object-contain"
                    />
                </div>
            </div>
        </>
    )
}
export { PerfectLocationTransport };