import NetworkingGuide from "components/NetworkingGuide";
import React from "react";
import { Testimonials } from ".";

const { Heading, Text, Img, Slider } = require("components")

const ArtOfNetworking = () => {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);
    return (
        <div className="mt-[3.25rem] self-stretch">
            <div className="relative z-[16]">
                <div className="flex flex-col items-center gap-[4.75rem] md:gap-[4.31rem] sm:gap-[2.88rem]">
                    <div className="container-xs flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
                        <div className="ml-[0.75rem] flex px-[0.63rem] md:ml-0">
                            <Heading
                                size="heading9xl"
                                as="h1"
                                className="mt-[0.38rem] !text-black-900"
                            >
                                Master the Art of Networking
                            </Heading>
                        </div>
                    </div>
                    <div className="relative h-[80.25rem] content-center self-stretch py-[0.63rem] md:h-auto">
                        <Img
                            src="images/img_rectangle_35.png"
                            alt="Image Twenty"
                            className="mx-auto h-[79.00rem] w-full flex-1 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-[3.25rem] md:px-[1.25rem]">
                            <div className="flex items-center md:flex-col">
                                <div className="mb-[11.38rem] flex flex-1 flex-col items-start gap-[3.00rem] self-end md:self-stretch sm:self-auto">
                                    <div className="flex self-stretch p-[0.63rem]">
                                        <Text
                                            size="text9xl"
                                            as="p"
                                            className="w-[64%] font-saira font-thin leading-[150%]"
                                        >
                                            Used our notifications and social media features
                                            but still finding networking tricky? Check out
                                            our articles for expert tips on how to build
                                            your tech network like a pro!
                                        </Text>
                                    </div>
                                    <div className="ml-[5.63rem] flex h-[6.25rem] items-center bg-[url(/public/images/img_group_213.svg)] bg-cover bg-no-repeat p-[1.38rem] md:ml-0 md:h-auto sm:p-[1.25rem]">
                                        <a href="/learnmore">
                                            <Text size="text9xl" as="p" className="font-saira font-light">
                                                Learn More
                                            </Text>
                                        </a>
                                    </div>
                                </div>
                                <NetworkingGuide />
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonials />
            </div>
            <div className="relative mx-[4.25rem] mt-[5.63rem] flex flex-col items-center gap-[4.88rem] md:mx-0 md:gap-[3.63rem] sm:gap-[2.44rem]">
                <div className="container-xs flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
                    <Heading
                        size="heading9xl"
                        as="h1"
                        className="!text-black-900 font-semibold font-saira"
                    >
                        The Founder
                    </Heading>
                </div>
                <div className="relative h-[54.38rem] self-stretch md:h-auto">
                    <Img
                        src="images/img_team_bg_tile.png"
                        alt="Teambgtile"
                        className="mt-[6.63rem] h-[28.25rem] w-full flex-1 rounded-[50px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[1.00rem] px-[3.50rem] md:px-[1.25rem]">
                        <div className="relative overflow-hidden h-[45.63rem] w-[40%]">
                            <div className="absolute bottom-0 left-0 bg-blue_gray-100_26  backdrop-blur-md right-0 top-0 m-auto h-[41.63rem] w-[84%] overflow-hidden rounded-[50px] border-2 border-solid border-cyan-800">
                                <Img
                                    src="images/img_pfp_1.png"
                                    alt="Pfpone"
                                    className="absolute bottom-[-2rem] left-0 right-0 m-auto h-[95%] w-[95%] flex-1 object-cover overflow-hidden"
                                />
                            </div>
                        </div>
                        <div className="flex w-[36%] flex-col items-center gap-[0.13rem] rounded-[50px] bg-white-a700 p-[0.75rem] md:w-full">
                            <div className="flex w-[40%] flex-col flex-center items-start md:w-full">
                                <Text
                                    size="text9xl"
                                    as="p"
                                    className="!font-medium leading-[150%] font-saira !text-black-900"
                                >
                                    Aimal Khan
                                </Text>
                                <Text
                                    as="p"
                                    className="font-thin font-saira ml-[0.25rem] leading-[150%] !text-black-900 md:ml-0"
                                >
                                    Founder & CEO
                                </Text>
                            </div>
                            <div className="mb-[0.25rem] flex w-[56%] justify-between gap-[1.2rem] md:ml-0 md:w-full">
                                <Img
                                    src="images/img_aimal_linked_in.svg"
                                    alt="Aimallinkedin"
                                    className="h-[3.13rem] w-[3.13rem]"
                                />
                                <Img
                                    src="images/img_gtihub_icon_1.svg"
                                    alt="Gtihubiconone"
                                    className="h-[3.13rem] w-[3.13rem]"
                                />
                                <Img
                                    src="images/img_instaicon_2.svg"
                                    alt="Instaicontwo"
                                    className="h-[3.13rem] w-[3.13rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { ArtOfNetworking };
