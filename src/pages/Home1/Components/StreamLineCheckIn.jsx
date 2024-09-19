const { Heading, Text, Img } = require("components")

const StreamLineCheckIn = () => {
    return (
        <div className="flex flex-col mt-[27.50rem] sm:mt-[5.50rem] h-[66.00rem] w-[94%] sm:w-full">
            <div className="container-xs left-[1.00rem] flex justify-center px-[3.50rem] md:px-[1.25rem] sm:w-full">
                <Heading
                    size="heading9xl"
                    as="h1"
                    className="!text-black-900 font-saira font-semibold"
                >
                    Streamline Check-Ins with QR Codes
                </Heading>
            </div>
            <div className="flex sm:flex-col">
            <Text
                size="text10xl"
                as="p"
                className="left-[0.00rem] font-saira m-auto w-[41.75rem] leading-[150%] !text-black-900 sm:w-full sm:px-[1.25rem]"
            >
                <span className="font-thin font-saira">Say&nbsp;</span>
                <span className="font-normal font-saira">
                    goodbye to manual check-ins!&nbsp;
                </span>
                <span className="font-thin font-saira">
                    Our QR check-in feature simplifies the process,
                    providing&nbsp;
                </span>
                <span className="font-normal font-saira">
                    real-time attendance counts and detailed participant lists
                    for organizers
                </span>
                <span className="font-thin font-saira">. Effortless tracking and seamless entry</span>
                <span>&nbsp;</span> <span>—</span> <span>&nbsp;</span>
                <span className="font-thin font-saira">just scan and go!</span>
            </Text>
            <Img
                src="images/img_3d_character_em.png"
                alt="3dcharacterem"
                className="bottom-[0.00rem] right-[0.00rem] m-auto h-[60.00rem] w-[39.25rem] object-cover sm:w-full sm:h-[34rem] sm:mt-[3rem]"
            />
            </div>
        </div>
    )
}
export { StreamLineCheckIn };