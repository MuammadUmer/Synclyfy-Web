import UserProfile4 from "components/UserProfile4";
import { Suspense } from "react";

const { Heading, Text, Img } = require("components")

const data4 = [
    {
        four: "4",
        userImage: "images/img_ellipse_56_32x32.png",
        userName: "Community A",
        userAttendance: "95K attnd",
    },
    {
        four: "5",
        userImage: "images/img_ellipse_56_1.png",
        userName: "Community B",
        userAttendance: "93K attnd",
    },
    {
        four: "6",
        userImage: "images/img_ellipse_56_2.png",
        userName: "You",
        userAttendance: "89K attnd",
    },
    {
        four: "4",
        userImage: "images/img_ellipse_56_32x32.png",
        userName: "Community A",
        userAttendance: "95K attnd",
    },
    {
        four: "4",
        userImage: "images/img_ellipse_56_32x32.png",
        userName: "Community A",
        userAttendance: "95K attnd",
    },
    {
        four: "4",
        userImage: "images/img_ellipse_56_32x32.png",
        userName: "Community A",
        userAttendance: "95K attnd",
    },
    {
        four: "10",
        userImage: "images/img_ellipse_56_6.png",
        userName: "Community X",
        userAttendance: "78K attnd",
    },
];

const LeaderBoard = () => {
    return (
        <div className="mt-[16.25rem] flex w-[88%] flex-col items-center gap-[0.88rem] md:w-full md:px-[1.25rem]">
            <Heading
                size="heading9xl"
                as="h1"
                className="text-center leading-[150%] !text-black-900"
            >
                <>
                    Leaderboard: <br /> Inspiring Excellence in Tech Communities
                </>
            </Heading>
            <div className="ml-[3.38rem] flex items-center justify-between gap-[1.25rem] self-stretch md:ml-0 md:flex-col">
                <Text
                    size="text10xl"
                    as="p"
                    className="w-[58%] leading-[150%] !text-black-900 md:w-full"
                >
                    <span>The Synclyfy Leaderboard&nbsp;</span>
                    <span className="font-light">
                        ranks communities based on event attendance
                    </span>
                    <span>
                        , driving organizers to deliver outstanding
                        experiences.&nbsp;
                    </span>
                    <span className="font-light">
                        This feature highlights the most active and influential
                        communities
                    </span>
                    <span>
                        , motivating both organizers and attendees to engage and
                        connect with top-performing networks.
                    </span>
                </Text>
                <div className="flex w-[30%] flex-col gap-[1.38rem] rounded-[50px] border border-solid border-cyan-800 bg-white-a700 md:w-full">
                    <div>
                        <div className="flex items-end justify-center">
                            <Heading
                                size="heading2xl"
                                as="h6"
                                className="mt-[0.63rem] tracking-[0.00rem] !text-black-900"
                            >
                                9:41
                            </Heading>
                            <div className="mb-[0.50rem] flex">
                                <Img
                                    src="images/img_settings_black_900_12x18.svg"
                                    alt="Settings"
                                    className="h-[0.75rem]"
                                />
                                <Img
                                    src="images/img_settings_black_900_12x16.svg"
                                    alt="Settings"
                                    className="ml-[0.38rem] h-[0.75rem]"
                                />
                                <Img
                                    src="images/img_elements_battery.svg"
                                    alt="Elements"
                                    className="ml-[0.38rem] h-[0.75rem]"
                                />
                            </div>
                        </div>
                        <div className="relative h-[15.38rem] content-center md:h-auto">
                            <div className="mx-auto flex-1">
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-center self-stretch">
                                        <div className="flex items-center justify-between gap-[1.25rem] self-stretch px-[2.38rem] py-[0.63rem] sm:px-[1.25rem]">
                                            <Img
                                                src="images/img_arrow_down_gray_800_01.svg"
                                                alt="Arrowdown"
                                                className="h-[2.75rem] w-[2.75rem]"
                                            />
                                            <Heading
                                                size="headingxl"
                                                as="h6"
                                                className="mr-[4.63rem] !font-plusjakartasans !text-gray-800_01 md:mr-0"
                                            >
                                                Leaderboard
                                            </Heading>
                                        </div>
                                        <Img
                                            src="images/img_vector.svg"
                                            alt="Vector"
                                            className="relative mt-[-0.63rem] h-[1.63rem]"
                                        />
                                    </div>
                                    <div className="relative mt-[-0.38rem] flex w-[24%] flex-col items-center md:w-full">
                                        <div className="self-stretch rounded-[44px] bg-cyan-800">
                                            <Img
                                                src="images/img_avatars_3d_avatar_13.png"
                                                alt="Avatars3d"
                                                className="h-[5.25rem] w-[5.25rem] object-cover"
                                            />
                                        </div>
                                        <div className="relative mt-[-0.88rem] flex w-[1.75rem] flex-col items-center justify-center rounded-[14px] bg-cyan-800">
                                            <Heading
                                                size="headingxl"
                                                as="h6"
                                                className="text-shadow-ts mt-[0.38rem] !font-plusjakartasans !text-black-900"
                                            >
                                                1
                                            </Heading>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mx-[2.63rem] mt-[-4.38rem] flex flex-col items-start md:mx-0">
                                    <div className="flex flex-col items-start gap-[0.50rem] self-stretch">
                                        <div className="flex flex-col items-start self-stretch">
                                            <Img
                                                src="images/img_ellipse_56.png"
                                                alt="Imageeen"
                                                className="h-[4.63rem] w-[4.63rem] rounded-[36px] object-cover"
                                            />
                                            <div className="relative ml-[1.38rem] mt-[-0.88rem] flex w-[1.75rem] flex-col items-center justify-center rounded-[14px] bg-cyan-800 md:ml-0">
                                                <Heading
                                                    size="headingxl"
                                                    as="h6"
                                                    className="text-shadow-ts mt-[0.25rem] !font-plusjakartasans !text-black-900"
                                                >
                                                    2
                                                </Heading>
                                            </div>
                                        </div>
                                        <Heading
                                            size="headingmd"
                                            as="p"
                                            className="mb-[0.38rem] ml-[0.25rem] !font-plusjakartasans !text-[0.88rem] !font-bold !text-black-900 md:ml-0"
                                        >
                                            Comm w
                                        </Heading>
                                    </div>
                                    <Text
                                        size="textlg"
                                        as="p"
                                        className="relative mt-[-0.38rem] !text-black-900"
                                    >
                                        100K Attnd
                                    </Text>
                                </div>
                            </div>
                            <div className="absolute bottom-[0.13rem] right-[8%] m-auto w-[26%]">
                                <div className="mx-[0.25rem] px-[0.25rem] md:mx-0">
                                    <div className="mb-[2.13rem] flex flex-col items-center">
                                        <Img
                                            src="images/img_ellipse_57.png"
                                            alt="Imageteen"
                                            className="h-[4.63rem] w-full rounded-[36px] object-cover md:h-auto"
                                        />
                                        <div className="relative mt-[-0.75rem] flex w-[1.75rem] flex-col items-center justify-center rounded-[14px] bg-cyan-800">
                                            <Heading
                                                size="headingxl"
                                                as="h6"
                                                className="text-shadow-ts mt-[0.38rem] !font-plusjakartasans !text-black-900"
                                            >
                                                3
                                            </Heading>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-[-1.75rem] flex flex-col items-center">
                                    <Heading
                                        size="headingmd"
                                        as="p"
                                        className="text-center leading-[150%] !text-black-900"
                                    >
                                        Comm Y
                                    </Heading>
                                    <div className="flex items-center justify-center self-stretch">
                                        <Img
                                            src="images/img_communitypfp_2.svg"
                                            alt="Communitypfptwo"
                                            className="h-[0.88rem] w-[0.88rem]"
                                        />
                                        <Text
                                            size="textlg"
                                            as="p"
                                            className="!font-plusjakartasans !text-black-900"
                                        >
                                            112k Attnd
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-[1.38rem] left-0 right-0 m-auto flex flex-1 flex-col items-center gap-[0.13rem] px-[3.50rem] md:px-[1.25rem]">
                                <Heading
                                    size="headingmd"
                                    as="p"
                                    className="text-center leading-[150%] !text-black-900"
                                >
                                    Comm Z
                                </Heading>
                                <div className="flex items-center gap-[0.38rem]">
                                    <Img
                                        src="images/img_communitypfp_2.svg"
                                        alt="Communitypfptwo"
                                        className="h-[0.88rem] w-[0.88rem] self-start"
                                    />
                                    <Text
                                        size="textlg"
                                        as="p"
                                        className="!font-plusjakartasans !text-black-900"
                                    >
                                        120K Attnd
                                    </Text>
                                </div>
                            </div>
                            <Img
                                src="images/img_communitypfp_2.svg"
                                alt="Communitypfptwo"
                                className="absolute bottom-[0.25rem] left-[1.75rem] m-auto h-[0.88rem] w-[0.88rem]"
                            />
                        </div>
                    </div>
                    <div className="rounded-tl-[32px] rounded-tr-[32px] bg-light_green-50 px-[1.00rem] py-[1.50rem] sm:py-[1.25rem]">
                        <div className="mb-[3.88rem] flex flex-col gap-[0.50rem]">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data4.map((d, index) => (
                                    <UserProfile4
                                        {...d}
                                        key={"autolayout" + index}
                                        className="bg-white-a700"
                                    />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { LeaderBoard };