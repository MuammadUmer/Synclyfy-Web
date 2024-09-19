const { Heading, Text, Img } = require("components")

const CuriousAndCelebrate = () => {
    return (
        <>
            <div className="relative mt-[28.00rem] h-[122.13rem] w-[94%]">
                <div className="top-[0.00rem] mb-[1rem] m-auto flex flex-1 flex-col items-center">
                    <Heading
                        size="heading10xl"
                        as="h1"
                        className="w-[84%] self-start leading-[150%] !text-black-900 md:w-full md:px-[1.25rem]"
                    >
                        Curious about who’s joining you? Want to connect with them?
                    </Heading>

                </div>
                <div className="mt-[2.88rem] flex items-center justify-between gap-[1.25rem] self-stretch md:flex-col">
                    <Text
                        size="text9xl"
                        as="p"
                        className="!font-hairline w-[42%] leading-[150%] !text-black-900 md:w-full md:px-[1.25rem]"
                    >
                        <span>Get&nbsp;</span>
                        <span className="font-light">
                            notified about fellow tech enthusiasts from your city,
                            university, or tech stack!
                        </span>
                        <span>&nbsp;Connect instantly with our&nbsp;</span>
                        <span>&nbsp;&nbsp;</span>
                        <span>
                            in-app chat feature. Networking has never been this easy
                            and exciting!
                        </span>
                    </Text>
                    <Img
                        src="images/img_rectangle_33.png"
                        alt="Imageteen"
                        className="h-[42.75rem] w-[54%] rounded-bl-[100px] rounded-tr-[100px] object-contain md:w-full"
                    />
                </div>
                <div className="container-xs mb-[8.25rem] mt-[8.25rem] flex flex-col items-center px-[2.00rem] md:px-[1.25rem] md:my-[4.25rem]">
                    <Heading
                        size="heading10xl"
                        as="h1"
                        className="!text-black-900"
                    >
                        Celebrate and share your event wins!
                    </Heading>
                </div>
                <div className="mt-[2.88rem] flex items-center justify-between gap-[1.25rem] self-stretch md:flex-col md:flex-wrap-reverse">
                    <Img
                        src="images/img_rectangle_34.png"
                        alt="Image Fifteen"
                        className="h-[42.75rem] w-[52%] rounded-bl-[100px] rounded-tr-[100px] object-contain md:w-full"
                    />
                    <Text
                        size="text10xl"
                        as="p"
                        className="font-hairline w-[42%] leading-[150%] !text-black-900 md:w-full md:px-[1.25rem]"
                    >
                        <span>
                            Went to an awesome event but kept it to yourself? Let’s fix
                            that! Share your tech adventures with&nbsp;
                        </span>
                        <span className="font-normal">
                            our cool social media templates
                        </span>
                        <span>&nbsp;and let everyone know you’re in the game!</span>
                    </Text>
                </div>
            </div>

        </>
    )
}
export { CuriousAndCelebrate };

{/* <div className="relative mt-[28.00rem] h-[122.13rem] w-[94%]">
<div className="absolute left-0 right-0 top-[0.00rem] m-auto flex flex-1 flex-col items-center">
    <Heading
        size="heading10xl"
        as="h1"
        className="w-[84%] self-start leading-[150%] !text-black-900 md:w-full md:px-[1.25rem]"
    >
        Curious about who’s joining you? Want to connect with them?
    </Heading>
    <div className="mt-[2.88rem] flex items-center justify-between gap-[1.25rem] self-stretch md:flex-col">
        <Text
            size="text9xl"
            as="p"
            className="!font-hairline w-[42%] leading-[150%] !text-black-900 md:w-full md:px-[1.25rem]"
        >
            <span>Get&nbsp;</span>
            <span className="font-light">
                notified about fellow tech enthusiasts from your city,
                university, or tech stack!
            </span>
            <span>&nbsp;Connect instantly with our&nbsp;</span>
            <span>&nbsp;&nbsp;</span>
            <span>
                in-app chat feature. Networking has never been this easy
                and exciting!
            </span>
        </Text>
        <Img
            src="images/img_rectangle_33.png"
            alt="Imageteen"
            className="h-[42.75rem] w-[54%] rounded-bl-[100px] rounded-tr-[100px] object-contain md:w-full"
        />
    </div>
    <div className="container-xs mb-[19.13rem] mt-[8.25rem] flex flex-col items-center px-[2.00rem] md:px-[1.25rem]">
        <Heading
            size="heading10xl"
            as="h1"
            className="!text-black-900"
        >
            Celebrate and share your event wins!
        </Heading>
    </div>
</div>
<Text
    size="text10xl"
    as="p"
    className="absolute bottom-[11%] right-[3%] m-auto w-[42%] leading-[150%] !text-black-900"
>
    <span>
        Went to an awesome event but kept it to yourself? Let’s fix
        that! Share your tech adventures with&nbsp;
    </span>
    <span className="font-normal">
        our cool social media templates
    </span>
    <span>&nbsp;and let everyone know you’re in the game!</span>
</Text>
<Img
    src="images/img_rectangle_34.png"
    alt="Image Fifteen"
    className="absolute bottom-[0.06rem] left-[0.00rem] m-auto h-[42.75rem] w-[52%] rounded-bl-[100px] rounded-tr-[100px] object-contain"
/>
</div> */}
