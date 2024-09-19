import UserProfile2 from "components/UserProfile2";
import { Suspense } from "react";

const { Heading, Text, Button, Img } = require("components")

const data2 = [
    {
        userImage: "images/img_designs_150x146.png",
        viewText: "View",
        useText: "Use",
    },
    {
        userImage: "images/img_design2_150x146.png",
        viewText: "View",
        useText: "Use",
    },
    { userImage: "images/img_designs_1.png", viewText: "View", useText: "Use" },
    { userImage: "images/img_designs_2.png", viewText: "View", useText: "Use" },
    { userImage: "images/img_designs_3.png", viewText: "View", useText: "Use" },
    { userImage: "images/img_designs_4.png", viewText: "View", useText: "Use" },
    { userImage: "images/img_designs_5.png", viewText: "View", useText: "Use" },
    { userImage: "images/img_designs_6.png", viewText: "View", useText: "Use" },
];

const PerfectVenue = () => {
    return (
        <div className="mt-[20.13rem] md:px-[1.25rem]">
            <div className="ml-[10.5rem] mr-[10.5rem] md:mx-0">
                <Heading
                    size="heading9xl"
                    as="h1"
                    className="leading-[5.88rem] font-saira font-semibold !text-black-900"
                >
                    Find and Book the Perfect Venue for Your Next Event with
                    Synclyfy
                </Heading>
                <div className="relative mx-[16.88rem] mt-[9.75rem] h-[47.50rem] md:mx-0">
                    <div className="absolute left-0 right-0 top-[0.00rem] m-auto flex w-[52%] flex-col items-center rounded-[50px] border-4 border-solid border-cyan-800 bg-gray-800_02 p-[1.50rem] sm:p-[1.25rem]">
                        <Img
                            src="images/img_rectangle_6703.png"
                            alt="Image"
                            className="mt-[0.75rem] h-[21.25rem] w-full rounded-[40px] object-cover md:h-auto"
                        />
                        <Text
                            size="text9xl"
                            as="p"
                            className="mt-[0.50rem] w-[96%] leading-[2.94rem] md:w-full"
                        >
                            1234 Tech Park Avenue, Suite 500, Silicon Valley, CA
                            94043
                        </Text>
                        <div className="mt-[1.00rem] flex justify-between gap-[1.25rem] self-stretch sm:flex-col">
                            <div className="relative h-[3.38rem] w-[44%] sm:w-full">
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[3.00rem] flex-1 rounded-[24px] bg-white-a700" />
                                <Text
                                    size="text9xl"
                                    as="p"
                                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !text-cyan-800"
                                >
                                    View
                                </Text>
                            </div>
                            <div className="relative h-[3.38rem] w-[44%] sm:w-full">
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[3.00rem] flex-1 rounded-[24px] bg-cyan-800" />
                                <Text
                                    size="text9xl"
                                    as="p"
                                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max"
                                >
                                    Book
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-[1.2rem] right-[6.0rem] m-auto h-[40.63rem] w-[52%] rotate-[16deg] rounded-[50px] border-4 border-solid border-cyan-800 bg-gray-800_02 px-[2.25rem] py-[2.13rem] sm:p-[1.25rem]">
                        <Img
                            src="images/img_rectangle_6703_434x466.png"
                            alt="Image"
                            className="absolute right-[2%] top-[0%] rotate-[-16deg] h-[26.13rem] w-[100%] rounded-[40px] object-contain"
                        />
                        <div className="absolute bottom-[5%] left-0 right-0 m-auto flex-1">
                            <div className="flex items-center sm:flex-col">
                                <div className="mb-[3.75rem] flex w-[26%] justify-center self-end rounded-[30px] bg-white-a700 p-[1.25rem] sm:w-full sm:self-auto">
                                    <Text
                                        size="text9xl"
                                        as="p"
                                        className="!text-cyan-800"
                                    >
                                        View
                                    </Text>
                                </div>
                                <div className="relative ml-[-9.50rem] flex flex-1 flex-col items-start sm:ml-0 sm:self-stretch">
                                    <Text
                                        size="text9xl"
                                        as="p"
                                        className="relative z-10 w-[80%] leading-[2.94rem] md:w-full"
                                    >
                                        1234 Tech Park Avenue, Suite 500, Silicon Valley,
                                        CA 94043
                                    </Text>
                                    <div className="mt-[1.25rem] mr-[2.3rem] flex flex-wrap justify-between gap-[1rem] self-stretch">
                                        <Text
                                            size="text9xl"
                                            as="p"
                                            className="rounded-[25px] bg-white-a700 px-[3.13rem] !text-cyan-800 sm:px-[1.25rem]"
                                        >
                                            View
                                        </Text>
                                        <Text
                                            size="text9xl"
                                            as="p"
                                            className="rounded-[25px] bg-cyan-800 px-[3.13rem] sm:px-[1.25rem]"
                                        >
                                            Book
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-[.2rem] left-[5.00rem] z-[11] m-auto h-[40.63rem] w-[52%] rotate-[-14deg] rounded-[50px] border-4 border-solid border-cyan-800 bg-gray-800_02 px-[2.25rem] py-[2.13rem] sm:p-[1.25rem]">
                        <Img
                            src="images/img_rectangle_6703_422x456.png"
                            alt="Image Ten"
                            className="absolute left-[5%] top-[0%] m-auto h-[26.38rem]  rotate-[14deg] w-[100%] rounded-[40px] object-contain"
                        />
                        <div className="absolute bottom-[5%] left-0 right-0 m-auto h-[17.75rem] flex-1">
                            <div className="absolute bottom-0 left-0 right-0 top-0 mx-[1.00rem] my-auto flex h-max flex-1 flex-col items-start md:mx-0">
                                <Text
                                    size="text9xl"
                                    as="p"
                                    className="mt-[2.5rem] ml-[2.3rem] w-[94%] font-saira font-normal leading-[2.94rem] md:w-full"
                                >
                                    1234 Tech Park Avenue, Suite 500, Silicon Valley, CA
                                    94043
                                </Text>
                                <div className="mt-[1.25rem] ml-[2.3rem] flex flex-wrap justify-between gap-[1rem] self-stretch">
                                    <Text
                                        size="text9xl"
                                        as="p"
                                        className="rounded-[25px] bg-white-a700 px-[3.13rem] !text-cyan-800 sm:px-[1.25rem]"
                                    >
                                        View
                                    </Text>
                                    <Text
                                        size="text9xl"
                                        as="p"
                                        className="rounded-[25px] bg-cyan-800 px-[3.13rem] sm:px-[1.25rem]"
                                    >
                                        Book
                                    </Text>
                                </div>
                            </div>
                            <div className="absolute bottom-[18%] right-[0.00rem] z-[13] m-auto flex w-[34%] justify-center rounded-[30px] bg-cyan-800 p-[1.00rem]">
                                <Text size="text9xl" as="p">
                                    Book
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-[0.7rem] left-0 right-0 z-[14] m-auto flex w-[52%] flex-col items-center rounded-[50px] border-4 border-solid border-cyan-800 bg-gray-800_02 p-[1.50rem] sm:p-[1.25rem]">
                        <Img
                            src="images/img_rectangle_6703.png"
                            alt="Image Eleven"
                            className="mt-[0.77rem] h-[21.25rem] w-full ml-[8px] rounded-[40px] object-cover md:h-auto"
                        />
                        <Text
                            size="text9xl"
                            as="p"
                            className="mt-[0.50rem] w-[94%] font-saira font-normal leading-[2.94rem] md:w-full"
                        >
                            1234 Tech Park Avenue, Suite 500, Silicon Valley, CA
                            94043
                        </Text>
                        <div className="mt-[1.25rem] flex flex-wrap justify-between gap-[1rem] self-stretch">
                            <Text
                                size="text9xl"
                                as="p"
                                className="rounded-[25px] bg-white-a700 px-[3.13rem] !text-cyan-800 sm:px-[1.25rem]"
                            >
                                View
                            </Text>
                            <Text
                                size="text9xl"
                                as="p"
                                className="rounded-[25px] bg-cyan-800 px-[3.13rem] sm:px-[1.25rem]"
                            >
                                Book
                            </Text>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <Text
                        size="text10xl"
                        as="p"
                        className="mt-[5.50rem] text-center font-thin font-saira leading-[3.13rem] w-[60%] !text-black-900"
                    >
                        Easily find and book the perfect venue for your tech events.
                        Filter by location, capacity, and features, view detailed
                        profiles, and secure your spot — all in one place. Make your
                        event unforgettable with Synclyfy.
                    </Text>
                </div>
            </div>
            <div className="mt-[21.13rem] flex flex-col items-center">
                <Heading
                    size="heading9xl"
                    as="h1"
                    className="!text-black-900 font-semibold font-saira"
                >
                    Design Marketplace
                </Heading>
                <Text
                    size="text10xl"
                    as="p"
                    className="relative mt-[-0.13rem] w-[55%] font-thin	font-saira leading-[150%] !text-black-900 md:w-full"
                >
                    Discover a wide range of pre-made templates in
                    Synclyfy&#39;s Design Marketplace. Easily find and customize
                    designs for your events, saving time and enhancing your
                    event&#39;s visual appeal.
                </Text>
                <div className="mt-[2.00rem] ml-[10rem] mr-[10rem] flex flex-col items-center gap-[6.50rem] self-stretch rounded-[50px] bg-blue_gray-900_02 p-[3.00rem] md:gap-[4.88rem] md:p-[1.25rem] sm:gap-[3.25rem]">
                    <div className="mx-[1.13rem] flex w-[70%] flex-col gap-[1.50rem] md:mx-0 md:w-full">
                        <div className="flex items-center justify-center gap-[1.50rem] md:flex-col">
                            <Img
                                src="images/img_user_black_900.svg"
                                alt="User"
                                className="h-[3.38rem] w-[8%] self-end object-contain md:w-full md:self-auto"
                            />
                            <div className="flex flex-1 items-center justify-between gap-[1.25rem] rounded-[30px] bg-blue_gray-100 px-[1.38rem] py-[0.75rem] md:self-stretch sm:px-[1.25rem]">
                                <Text
                                    size="text2xl"
                                    as="p"
                                    className="ml-[1.25rem] w-[54%] !italic leading-[150%] !text-gray-700_01 md:ml-0"
                                >
                                    Search design templates
                                </Text>
                                <Img
                                    src="images/img_search_1.svg"
                                    alt="Searchone"
                                    className="h-[2.00rem] w-[2.00rem]"
                                />
                            </div>
                            <Img
                                src="images/img_mic_2.svg"
                                alt="Micthree"
                                className="h-[3.13rem] w-[3.13rem] md:w-full"
                            />
                        </div>
                        <div className="flex gap-[1.75rem] md:flex-col">
                            <Button
                                color="blue_gray_100"
                                size="xl"
                                className="w-full rounded-[20px]"
                            >
                                Type
                            </Button>
                            <Button
                                color="blue_gray_100"
                                size="xl"
                                className="w-full rounded-[20px]"
                            >
                                Tools
                            </Button>
                            <Button
                                color="blue_gray_100"
                                size="xl"
                                className="w-full rounded-[20px]"
                            >
                                Licence
                            </Button>
                            <Button
                                color="blue_gray_100"
                                size="xl"
                                className="w-full rounded-[20px]"
                            >
                                Colors
                            </Button>
                            <Button
                                color="blue_gray_100"
                                size="xl"
                                className="w-full rounded-[20px]"
                            >
                                AI
                            </Button>
                            <Button
                                color="blue_gray_100"
                                size="xl"
                                className="w-full rounded-[20px]"
                            >
                                More...
                            </Button>
                        </div>
                    </div>
                    <div className="mb-[4.25rem] grid w-[70%] grid-cols-4 justify-center gap-[1.88rem] gap-y-[3.75rem] md:grid-cols-2 sm:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {data2.map((d, index) => (
                                <UserProfile2 {...d} key={"gridviewone" + index} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { PerfectVenue };