const { Heading } = require("components")

const VirtualCommunityText = () => {
    return (
        <div className="container-xs mt-[25.13rem] flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
            <div className="ml-[1.63rem] flex md:ml-0">
                <Heading
                    size="heading10xl"
                    as="h1"
                    className="!text-black-900"
                >
                    Join the Virtual Communities!
                </Heading>
            </div>
        </div>
    )
}
export { VirtualCommunityText };