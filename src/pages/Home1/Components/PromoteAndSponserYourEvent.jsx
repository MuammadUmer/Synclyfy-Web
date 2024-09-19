const { Heading, Text } = require("components")

const PromoteAndSponserYourEvent = () => {
    return (
        <div className="mt-[20.00rem] ml-[5rem] mr-[5rem] flex flex-col items-start self-stretch md:mx-0 sm:mt-[5rem]">
            <Heading
                size="heading9xl"
                as="h1"
                className="!text-black-900 font-saira"
            >
                Promote and Sponsor Your Events
            </Heading>
            <Text
                size="text10xl"
                as="p"
                className="w-[66%] leading-[150%] font-saira font-thin !text-black-900 md:w-full"
            >
                Boost your event&#39;s visibility with Synclyfy&#39;s
                promotion and sponsorship tools. Reach a wider audience and
                attract sponsors to maximize your event&#39;s success.
            </Text>
        </div>

    )
}
export { PromoteAndSponserYourEvent };