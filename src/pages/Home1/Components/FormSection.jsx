const { Heading, Text, Img } = require("components")

const FormSection = () => {
    return (
        <div className="ml-[10.50rem] mr-[10.50rem] flex items-center gap-[2.88rem] self-stretch rounded-[50px] bg-gradient1 px-[2.50rem] py-[2.75rem] sm:ml-[0rem] sm:mr-[0rem] md:mx-0 md:flex-col md:py-[1.25rem] sm:p-[1.25rem]">
            <div className="mt-[0.38rem] flex w-[12%] flex-col gap-[3.50rem] rounded-[50px] bg-blue_gray-100 px-[0.38rem] py-[5.88rem] md:w-full md:p-[1.25rem] sm:gap-[1.75rem]">
                <div className="mx-[0.63rem] flex flex-col items-center gap-[3.88rem] md:mx-0 sm:gap-[1.94rem]">
                    <Img
                        src="images/img_frame_439.svg"
                        alt="Image"
                        className="h-[5.13rem] w-[5.13rem] object-cover"
                    />
                    <Img
                        src="images/img_analytics2_1.svg"
                        alt="Analytics2one"
                        className="h-[5.13rem] w-[5.13rem] object-cover"
                    />
                    <Img
                        src="images/img_clock.svg"
                        alt="Clock"
                        className="mb-[8.25rem] h-[6.25rem] w-[6.25rem] object-cover sm:mb-[0rem]"
                    />
                </div>
            </div>
            <div className="flex flex-1 justify-center sm:items-center rounded-[50px] bg-blue_gray-100_19 p-[2.50rem] md:self-stretch md:px-[1.25rem] sm:p-[1.25rem]">
                <div className="mt-[2.88rem] flex w-[90%] flex-col items-center md:w-full">
                    <Heading
                        size="heading8xl"
                        as="h1"
                        className="ml-[13.88rem] font-saira self-start md:ml-0"
                    >
                        Forms
                    </Heading>
                    <div className="mt-[6.38rem] flex self-stretch md:flex-col sm:gap-[1rem]">
                        <div className="flex w-full flex-col items-center gap-[0.63rem] rounded-[30px] bg-blue_gray-100_26 p-[0.38rem]">
                            <Img
                                src="images/img_close.svg"
                                alt="Close"
                                className="mt-[1.88rem] h-[3.00rem] w-[3.00rem]"
                            />
                            <Text
                                size="text8xl"
                                as="p"
                                className="leading-[2.44rem] font-saira text-center"
                            >
                                <>
                                    Create from <br /> scratch
                                </>
                            </Text>
                        </div>
                        <div className="ml-[2.25rem] flex w-full flex-col items-center gap-[0.50rem] rounded-[30px] bg-blue_gray-100_26 p-[0.75rem] shadow-bs md:ml-0">
                            <div className="relative mt-[1.00rem] h-[3.25rem] w-[34%] content-end md:h-auto">
                                <div className="mx-auto mb-[1.00rem] flex w-[54%] flex-col items-start gap-[0.63rem]">
                                    <div className="h-[0.25rem] w-[0.25rem] rounded-sm bg-white-a700" />
                                    <div className="h-[0.25rem] w-[0.25rem] rounded-sm bg-white-a700" />
                                </div>
                                <Img
                                    src="images/img_camera_white_a700.svg"
                                    alt="Camera"
                                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[3.00rem] w-[3.00rem]"
                                />
                                <Img
                                    src="images/img_plus.svg"
                                    alt="Plus"
                                    className="absolute bottom-[0.00rem] right-[0.00rem] m-auto h-[1.75rem] w-[1.75rem]"
                                />
                            </div>
                            <Text
                                size="text8xl"
                                as="p"
                                className="leading-[2.44rem] font-saira text-center"
                            >
                                <>
                                    Registration <br /> form
                                </>
                            </Text>
                        </div>
                        <div className="ml-[2.88rem] flex w-full flex-col items-center gap-[0.63rem] rounded-[30px] bg-blue_gray-100_26 px-[0.50rem] py-[1.50rem] md:ml-0 sm:py-[1.25rem]">
                            <div className="relative h-[3.63rem] w-[36%]">
                                <Img
                                    src="images/img_close_white_a700.svg"
                                    alt="Close"
                                    className="absolute bottom-[0.06rem] left-[0.00rem] m-auto h-[2.88rem] w-[2.88rem]"
                                />
                                <Img
                                    src="images/img_close_white_a700.svg"
                                    alt="Close"
                                    className="absolute right-[0.00rem] top-[0.00rem] m-auto h-[1.50rem] w-[1.50rem]"
                                />
                            </div>
                            <Text size="text8xl" as="p" className="mb-[1.25rem] font-saira text-center">
                                Create With AI
                            </Text>
                        </div>
                    </div>
                    <Text size="text8xl" as="p" className="mt-[4.25rem]">
                        OR
                    </Text>
                    <div className="mx-[2.38rem] mt-[3.13rem] flex items-center justify-end gap-[2.25rem] self-stretch md:mx-0 sm:flex-col">
                        <Text size="text8xl" as="p">
                            BROWSE PRE-MADE TEMPLATES
                        </Text>
                        <Img
                            src="images/img_arrow_head_1.svg"
                            alt="Arrowheadone"
                            className="h-[3.00rem] w-[3.00rem] sm:w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export { FormSection };