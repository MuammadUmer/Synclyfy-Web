const { Heading, Text, Img, Input } = require("components")

const CatBot = () => {
    return (
        <div className="mt-[24.13rem] flex flex-col w-full gap-[6.50rem] self-stretch md:gap-[4.88rem] sm:gap-[3.25rem]">
            <div className="ml-[1.25rem] md:ml-0">
                <div className="ml-[3.38rem] mr-[5.88rem] flex justify-center md:mx-0">
                    <Heading
                        size="heading9xl"
                        as="h1"
                        className="mt-[0.38rem] !text-black-900"
                    >
                        Meet Catbot, Your Purr-fect Tech Companion!
                    </Heading>
                </div>
                <div className="relative mt-[-3.38rem] flex items-center md:flex-col">
                    <div className="flex w-[40%] justify-center md:w-full md:px-[1.25rem]">
                        <Text
                            size="text10xl"
                            as="p"
                            className="mt-[0.63rem] w-[88%] leading-[150%] !text-black-900"
                        >
                            <span>Introducing Catbot&nbsp;</span>
                            <span className="font-normal">Hebbonn</span>
                            <span>
                                , our adorable and savvy chatbot with a playful cat
                                persona! Whether you&#39;re looking for event details,
                                networking tips, or just some friendly advice, Hebbonn
                                is here to help 24/7. With its cute charm and
                                tech-savvy smarts, Hebbonn makes navigating Synclyfy a
                                breeze. Get ready for a paws-itively delightful
                                experience with your new feline friend! But be careful
                                she’s got sharp nails ⚠ ️
                            </span>
                        </Text>
                    </div>
                    <Img
                        src="images/img_cat_2.png"
                        alt="Cattwo"
                        className="relative ml-[-5.50rem] h-[56.25rem] w-[56.25rem] object-cover md:ml-0 md:w-full"
                    />
                </div>
            </div>
            <div className="relative h-[104.00rem] content-center py-[0.63rem] md:mr-0 md:h-auto">
                <Img
                    src="images/img_bgblack_1.png"
                    alt="Bgblackone"
                    className="h-[102.75rem] w-full "
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[64%] flex-col shadow-catbot items-center rounded-[50px] bg-blue_gray-100_26">
                    <div className="flex items-center sm:flex-col">
                        <Img
                            src="images/img_paw1icon_1.svg"
                            alt="Paw1iconone"
                            className="h-[12.50rem] w-[12.50rem] sm:w-full"
                        />
                        <Text size="text12xl" as="p" className="font-saira font-thin sm:px-[1.25rem]">
                            Hebbonn
                        </Text>
                    </div>

                    <div className="h-[0.06rem] self-stretch w-full bg-black-900" />

                    <div className="mb-[3.63rem] ml-[1.75rem] mr-[0.88rem] mt-[1.63rem] flex flex-col items-start self-stretch md:mx-0">
                        <div className="mt-[5.75rem] flex w-[54%] justify-center self-end rounded-[30px] bg-cyan-800 md:w-full md:px-[1.25rem]">
                            <Text
                                as="p"
                                className="!font-saira  mt-[0.50rem] w-[94%] leading-[150%] font-thin !text-gray-50_02"
                            >
                                Hey Hebbonn! Can you help me find some tech events near
                                me?
                            </Text>
                        </div>

                        <div className="mt-[2.13rem] flex w-[66%] justify-center rounded-[30px] bg-blue_gray-100 p-[0.50rem] md:w-full">
                            <Text
                                as="p"
                                className="!font-saira  w-[96%] leading-[150%] font-thin !text-cyan-800"
                            >
                                Meow! Of course, I can! What city are you in?
                            </Text>
                        </div>

                        <div className="relative mt-[0.25rem] h-[3.13rem] self-stretch">
                            <div className="absolute bottom-0 right-[0.50rem] top-0 my-auto h-[3.13rem] w-[18%] rounded-[24px] bg-cyan-800" />
                            <Text
                                as="p"
                                className="!font-saira  absolute font-thin bottom-[0.31rem] right-[0.00rem] m-auto w-[16%] leading-[150%]"
                            >
                                I&#39;m in NYC.
                            </Text>
                        </div>

                        <div className="mt-[2.13rem] flex w-[66%] justify-center rounded-[30px] bg-blue_gray-100 p-[0.50rem] md:w-full">
                            <Text
                                as="p"
                                className="!font-saira  w-[96%] leading-[150%] font-thin !text-cyan-800"
                            >
                                Purr-fect! Let me fetch some events for you in NYC🐱💻
                            </Text>
                        </div>

                        <div className="mr-[0.63rem] mt-[2.38rem] flex w-[52%] justify-center self-end rounded-[30px] bg-cyan-800 p-[0.25rem] md:mr-0 md:w-full">
                            <Text
                                as="p"
                                className="!font-saira  font-thin w-[94%] leading-[150%]"
                            >
                                Thanks, Hebbonn! Also, any fun ways to meet people at
                                these events?
                            </Text>
                        </div>

                        <div className="mt-[2.13rem] flex w-[66%] justify-center rounded-[30px] bg-blue_gray-100 p-[0.50rem] md:w-full">
                            <Text
                                as="p"
                                className="!font-saira  w-[96%] leading-[150%] font-thin !text-cyan-800"
                            >
                                Absolutely! Try starting with a purr-sonal touch.
                                Compliment someone’s tech gear or ask about their
                                latest project. And don’t forget to exchange contact
                                info with a friendly &quot;paw-shake!&quot; 🐾✨
                            </Text>
                        </div>

                        <div className="mr-[0.63rem] mt-[2.00rem] flex w-[62%] justify-center self-end rounded-[30px] bg-cyan-800 p-[0.50rem] md:mr-0 md:w-full">
                            <Text
                                as="p"
                                className="!font-saira w-[96%]  font-thin leading-[150%]"
                            >
                                Great idea! Just one more thing—how can I share my
                                event attendance on social media?
                            </Text>
                        </div>
                        <div className="mt-[2.13rem] flex w-[66%] justify-center rounded-[30px] bg-blue_gray-100 p-[0.50rem] md:w-full">
                            <Text
                                as="p"
                                className="!font-saira  w-[96%] leading-[150%] font-thin !text-cyan-800"
                            >
                                Easy-peasy! Use our cute social media templates to
                                share your tech adventures. Just a few clicks and
                                you’ll be the cat’s whiskers on your feed! 😺📱
                            </Text>
                        </div>

                        <div className="mr-[0.63rem] mt-[2.00rem] flex w-[62%] justify-center self-end rounded-[30px] bg-cyan-800 p-[0.50rem] md:mr-0 md:w-full">
                            <Text
                                as="p"
                                className="!font-saira w-[96%]  font-thin leading-[150%]"
                            >
                                You're the best, Catbot! Thanks for all your help.
                            </Text>
                        </div>

                        <div className="mt-[2.00rem] flex w-[66%] justify-center rounded-[30px] bg-blue_gray-100 p-[0.50rem] md:w-full">
                            <Text
                                as="p"
                                className="!font-saira  w-[98%] leading-[150%] font-thin !text-cyan-800"
                            >
                                Anytime, fur-iend! If you have more questions, just
                                give me a meow. Have a paw-some day! 🐾😸
                            </Text>
                        </div>

                        <div className="mr-[0.63rem] mt-[2.13rem] flex justify-center self-stretch rounded-[26px] border border-solid border-cyan-800 p-[0.63rem] md:mr-0">
                            <Text
                                as="p"
                                className="!font-saira  w-[16%] leading-[150%] font-thin !text-black-900"
                            >
                                Chat With Me
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { CatBot };