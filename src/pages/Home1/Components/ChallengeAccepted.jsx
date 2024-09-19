const { Heading, Text, Img } = require("components")

const ChallengeAccepted = () => {
    return (
        <div className="mt-[25.00rem] flex w-[98%] flex-col items-center md:w-full md:px-[1.25rem]">
            <div className="flex justify-center self-stretch p-[0.63rem]">
                <Heading
                    size="heading9xl"
                    as="h1"
                    className="w-[72%] leading-[150%] !text-black-900"
                >
                    Challenge Accepted! Inter-University Hackathons and
                    Competitions Await!
                </Heading>
            </div>
            <div className="container-xs mt-[1.50rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
                <div className="flex w-[80%] justify-end px-[0.63rem] md:w-full">
                    <Text
                        size="text10xl"
                        as="p"
                        className="mt-[0.63rem] w-[92%] leading-[150%] !text-black-900"
                    >
                        <span>
                            Ready to show off your skills and compete with the
                            best?&nbsp;
                        </span>
                        <span className="font-light">
                            Synclyfy now features inter-university hackathons and
                            competitions!
                        </span>
                        <span>
                            &nbsp;Connect with peers, innovate together, and see who
                            comes out on top. Get ready for some friendly rivalry
                            and epic tech battles!
                        </span>
                    </Text>
                </div>
            </div>
            <div className="mt-[9.88rem] flex w-[98%] justify-between gap-[1.25rem] md:w-full md:flex-col">
                <Img
                    src="images/img_rectangle_45.png"
                    alt="Imageteen"
                    className="h-[28.00rem] w-[48%] rounded-[50px] object-contain md:w-full"
                />
                <Img
                    src="images/img_rectangle_46.png"
                    alt="Imageteen"
                    className="mr-[4.63rem] h-[28.00rem] w-[42%] rounded-[50px] object-contain md:mr-0 md:w-full"
                />
            </div>
        </div>
    )
}
export { ChallengeAccepted };