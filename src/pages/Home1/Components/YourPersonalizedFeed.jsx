const { Heading, Text } = require("components")

const YourPersonalizedFeed = () => {
    return ( 
        <div className="pl-[4rem] h-[40.75rem] w-[100%] sm:px-[.4rem] sm:text-justify sm:text-center sm:mb-[30rem]">
        <Heading
          size="heading9xl"
          as="h3"
          className="mt-[15.25rem] self-start sm:text-justify sm:text-center font-saira text-[60px] font-semibold leading-[90.5px] text-left !text-black-900"
        >
          Your Personalized Feed
        </Heading>
        <Text
          size="text10xl"
          as="p"
          className="mt-2 w-[60%] sm:text-justify font-saira text-[32px] font-thin leading-12 text-left self-start md:w-full md:px-[1.25rem] sm:px-[.4rem]  !text-black-900"
        >
          Synclyfy curates events tailored to your interests,&nbsp;
          <span className="font-normal leading-[48px] font-saira text-gray-900">
            connects you with fellow attendees
          </span>
          <span>, and lets you showcase your profile.</span>
          <span className="font-normal leading-[48px] font-saira text-gray-900">
            You can also embed your social media profiles right in your
            page &nbsp;
          </span>
          <span className="!text-black-300">
            with our cool widgets. Follow your favorite speakers and
            stay updated on their sessions.
          </span>
        </Text>
      </div>
    )
}
export { YourPersonalizedFeed };