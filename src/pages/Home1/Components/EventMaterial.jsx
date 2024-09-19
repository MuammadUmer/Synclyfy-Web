const { Heading, Text, Img } = require("components")

const EventMaterial = () => {
    return (
        <>
            <Heading
                size="heading7xl"
                as="h1"
                className="mt-[24.75rem] ml-[5rem] self-start font-saira !text-black-900"
            >
                Attended the event but forgot the topics?
            </Heading>
            <Text
                size="text10xl"
                as="p"
                className="self-start ml-[5rem] !font-normal font-saira !text-black-900"
            >
                We&#39;ve got you covered!
            </Text>
            <div className="mt-[3.50rem] flex w-[85%] flex-col items-end md:w-full md:px-[1.25rem]">
                <div className="ml-[18.38rem] mr-[18.88rem] flex flex-col items-start self-stretch rounded-[30px] bg-gradient8 px-[2.13rem] py-[2.00rem] md:mx-0 sm:p-[1.25rem]">
                    <div className="flex w-[100%] items-center md:w-full sm:flex-col">
                        <div className="flex flex-1 items-center justify-center gap-[1.94rem] sm:self-stretch">
                            <Img
                                src="images/img_slides_1.svg"
                                alt="Slidesone"
                                className="h-[8.25rem] w-[8.25rem]"
                            />
                            <Img
                                src="images/img_video_1.svg"
                                alt="Videoone"
                                className="h-[5.63rem] w-[36%] object-contain"
                            />
                            <Img
                                src="images/img_analytics_1.svg"
                                alt="Analyticsone"
                                className="mb-[1.00rem] h-[5.75rem] w-[5.75rem] self-end sm:w-full sm:self-auto"
                            />
                            <Img
                                src="images/img_powerpoint_1.svg"
                                alt="Powerpointone"
                                className="ml-[4.38rem] h-[6.88rem] w-[6.88rem] object-cover sm:ml-0 sm:w-full"
                            />
                        </div>
                    </div>
                    <Heading
                        size="heading5xl"
                        as="h2"
                        className="ml-[2.63rem] font-saira mt-[2.63rem] !font-bold !text-black-900 md:ml-0"
                    >
                        Event Materials
                    </Heading>
                    <Text
                        size="text10xl"
                        as="p"
                        className="mb-[8.63rem] font-saira ml-[0.50rem] mt-[1.50rem] self-stretch text-center leading-[150%] !text-black-900 md:ml-0"
                    >
                        <span className="font-thin">Access&nbsp;</span>
                        <span className="font-normal">event slides</span>
                        <span>,&nbsp;</span>
                        <span className="font-normal">documents</span>
                        <span>,&nbsp;</span>
                        <span className="font-normal">videos</span>
                        <span className="font-thin">, and&nbsp;</span>
                        <span className="font-normal">insightful analytics</span>
                        <span className="font-thin">&nbsp;to enhance your learning experience.</span>
                    </Text>
                </div>
                <Heading
                    size="heading7xl"
                    as="h1"
                    className="mt-[3.25rem] font-saira !text-black-900"
                >
                    Missed the event? Curious about what happened?
                </Heading>
                <Text
                    size="text10xl"
                    as="p"
                    className="mr-[0.63rem] !font-normal font-saira !text-black-900 md:mr-0"
                >
                    We&#39;ve got you covered!
                </Text>
            </div>
        </>
    )
}
export { EventMaterial };