const { Heading, Text, Img } = require("components")

const ConnectAndCollaborate = () => {
    return (
        <div className="mt-[24.88rem] flex w-[92%] items-center justify-center md:w-full md:flex-col md:px-[1.25rem]">
        <div className="flex flex-1 flex-col items-start gap-[1.63rem] md:self-stretch">
          <Heading
            size="heading10xl"
            as="h1"
            className="w-[88%] leading-[150%] !text-black-900 md:w-full"
          >
            Connect & Collaborate: Synclyfy&#39;s Chat Feature
          </Heading>
          <Text
            size="text10xl"
            as="p"
            className="leading-[150%] !text-black-900"
          >
            <>
              Engage with fellow attendees, share insights, and <br />
              collaborate on events in real-time with Synclyfy&#39;s
              <br /> integrated chat feature.
            </>
          </Text>
        </div>
        <div className="relative ml-[-6.38rem] w-[32%] md:ml-0 md:w-full">
          <div className="relative h-[66.63rem] md:h-auto">
            <div className="mt-[0.50rem] h-[62.00rem] w-[76%] rounded-[48px] bg-black-900" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[66.63rem] flex-1 md:h-auto">
              <div className="mt-[0.50rem] h-[62.00rem] w-[76%] rounded-[48px] bg-black-900" />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[66.63rem] flex-1">
                <Img
                  src="images/img_vector_1066x608.png"
                  alt="Vector"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[66.63rem] w-full flex-1 object-cover"
                />
                <div className="absolute bottom-[6%] left-0 right-0 m-auto flex flex-1 flex-col items-end">
                  <Img
                    src="images/img_vector_50x50.png"
                    alt="Vector Eleven"
                    className="relative z-[15] mr-[14.50rem] h-[3.13rem] w-[3.13rem] object-cover md:mr-0"
                  />
                  <div className="relative mt-[-1.25rem] flex w-[76%] flex-col items-end gap-[1.50rem] rounded-[38px] bg-gradient5 px-[1.50rem] py-[0.50rem] md:w-full sm:px-[1.25rem]">
                    <Img
                      src="images/img_settings_black_900.svg"
                      alt="Settings"
                      className="mr-[9.38rem] h-[0.75rem] md:mr-0"
                    />
                    <div className="mb-[1.50rem] flex flex-col items-start self-stretch">
                      <div className="flex w-[64%] justify-center rounded-[12px] bg-white-a700_af p-[0.25rem] md:w-full">
                        <div className="mt-[0.25rem] flex w-full flex-col items-start self-end">
                          <Img
                            src="images/img_vector_black_900.svg"
                            alt="Vector Thirteen"
                            className="h-[2.38rem] w-full md:h-auto"
                          />
                          <Text
                            size="text2xl"
                            as="p"
                            className="!font-hairline relative ml-[5.25rem] mt-[-1.25rem] !text-black-900 md:ml-0"
                          >
                            Synclyfy
                          </Text>
                        </div>
                      </div>
                      <div className="mt-[0.38rem] flex w-[52%] justify-center rounded-[12px] bg-blue_gray-100_01 px-[0.63rem] py-[0.75rem] md:w-full">
                        <Img
                          src="images/img_vector_black_900_12x180.svg"
                          alt="Vector Fifteen"
                          className="h-[0.75rem] w-[92%] object-contain"
                        />
                      </div>
                      <Img
                        src="images/img_settings_blue_gray_300.svg"
                        alt="Settings"
                        className="mt-[1.00rem] h-[0.63rem] w-[14%] object-contain"
                      />
                      <div className="mt-[0.50rem] flex self-end rounded-[22px] bg-blue-200_c9 px-[0.75rem] py-[0.88rem]">
                        <Img
                          src="images/img_vector_black_900_12x224.svg"
                          alt="Vector"
                          className="h-[0.75rem] w-[94%] self-end object-contain"
                        />
                      </div>
                      <div className="mt-[0.38rem] flex self-end rounded-[18px] bg-indigo-200 p-[0.88rem]">
                        <Img
                          src="images/img_vector_black_900_36x278.svg"
                          alt="Vectorteen"
                          className="h-[2.25rem] w-[92%] self-end object-contain"
                        />
                      </div>
                      <Img
                        src="images/img_settings_blue_gray_300_10x58.svg"
                        alt="Settings"
                        className="mt-[1.00rem] h-[0.63rem] w-[14%] self-end object-contain"
                      />
                      <div className="mt-[0.50rem] flex rounded-[22px] bg-blue_gray-100_01 px-[0.63rem] py-[0.88rem]">
                        <Img
                          src="images/img_vector_black_900_12x294.svg"
                          alt="Vector"
                          className="h-[0.75rem] w-[98%] object-contain"
                        />
                      </div>
                      <Img
                        src="images/img_settings_10x58.svg"
                        alt="Settings"
                        className="mt-[1.00rem] h-[0.63rem] w-[14%] object-contain"
                      />
                      <div className="mt-[0.50rem] flex self-end rounded-[22px] bg-indigo-200 p-[0.88rem]">
                        <Img
                          src="images/img_vector_black_900_12x198.svg"
                          alt="Vector"
                          className="h-[0.75rem] w-[90%] self-end object-contain"
                        />
                      </div>
                      <Img
                        src="images/img_settings_1.svg"
                        alt="Settings Eleven"
                        className="mt-[1.00rem] h-[0.63rem] w-[14%] self-end object-contain"
                      />
                      <div className="mt-[0.50rem] flex w-[50%] items-center justify-center rounded-[30px] bg-blue_gray-100_01 p-[0.88rem] md:w-full">
                        <Img
                          src="images/img_overflow_menu.svg"
                          alt="Overflowmenu"
                          className="h-[1.88rem] w-[1.88rem]"
                        />
                        <div className="ml-[1.00rem] flex h-[0.50rem] items-center bg-[url(/public/images/img_group_203.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Img
                            src="images/img_group_203.svg"
                            alt="Vector"
                            className="h-[0.50rem] w-full"
                          />
                        </div>
                        <div className="flex flex-1 justify-end">
                          <div className="h-[1.00rem] w-[0.19rem] bg-black-900_3d" />
                          <div className="relative ml-[-0.13rem] h-[1.00rem] w-[0.19rem] bg-black-900" />
                        </div>
                        <div className="flex">
                          <div className="h-[1.50rem] w-[0.19rem] bg-black-900_3d" />
                          <div className="relative ml-[-0.13rem] h-[1.50rem] w-[0.19rem] bg-black-900" />
                        </div>
                        <div className="flex">
                          <div className="h-[1.00rem] w-[0.19rem] bg-black-900_3d" />
                          <div className="relative ml-[-0.13rem] h-[1.00rem] w-[0.19rem] bg-black-900" />
                        </div>
                        <div className="flex h-[0.50rem] items-center bg-[url(/public/images/img_group_203.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Img
                            src="images/img_group_203.svg"
                            alt="Vector"
                            className="h-[0.50rem] w-full"
                          />
                        </div>
                        <div className="flex h-[0.25rem] items-center bg-[url(/public/images/img_group_203.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Img
                            src="images/img_group_203.svg"
                            alt="Vector Fortyone"
                            className="h-[0.25rem] w-full"
                          />
                        </div>
                        <div className="flex h-[0.75rem] items-center bg-[url(/public/images/img_group_203.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Img
                            src="images/img_group_203.svg"
                            alt="Vector"
                            className="h-[0.75rem] w-full"
                          />
                        </div>
                        <div className="flex flex-1 justify-end">
                          <div className="h-[1.00rem] w-[0.19rem] bg-black-900_3d" />
                          <div className="relative ml-[-0.13rem] h-[1.00rem] w-[0.19rem] bg-black-900" />
                        </div>
                        <div className="flex h-[0.75rem] items-center bg-[url(/public/images/img_group_203.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Img
                            src="images/img_group_203.svg"
                            alt="Vector"
                            className="h-[0.75rem] w-full"
                          />
                        </div>
                        <div className="flex h-[0.50rem] items-center bg-[url(/public/images/img_group_203.svg)] bg-cover bg-no-repeat md:h-auto">
                          <Img
                            src="images/img_group_203.svg"
                            alt="Vector Fiftyone"
                            className="h-[0.50rem] w-full"
                          />
                        </div>
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.75rem]"
                        />
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.50rem]"
                        />
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.25rem] w-[0.19rem]"
                        />
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.50rem]"
                        />
                        <div className="h-[1.00rem] w-[0.19rem] bg-black-900_3d" />
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.50rem]"
                        />
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.75rem]"
                        />
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.50rem]"
                        />
                        <Img
                          src="images/img_group_203.svg"
                          alt="Vector"
                          className="h-[0.25rem] w-[0.19rem]"
                        />
                      </div>
                      <Img
                        src="images/img_settings_10x58.svg"
                        alt="Settings"
                        className="mt-[1.00rem] h-[0.63rem] w-[14%] object-contain"
                      />
                      <div className="mt-[0.50rem] flex self-end rounded-[22px] bg-indigo-200 p-[0.88rem]">
                        <Img
                          src="images/img_settings_black_900_12x90.svg"
                          alt="Settings"
                          className="h-[0.75rem] w-[80%] self-end object-contain"
                        />
                      </div>
                      <Img
                        src="images/img_settings_1.svg"
                        alt="Settings"
                        className="mt-[1.00rem] h-[0.63rem] w-[14%] self-end object-contain"
                      />
                      <div className="mt-[2.13rem] h-[4.75rem] self-stretch bg-[url(/public/images/img_group_188.svg)] bg-cover bg-no-repeat p-[1.00rem] md:h-auto">
                        <div className="flex">
                          <div className="flex flex-1 items-center gap-[0.94rem]">
                            <div className="flex h-[2.50rem] flex-col bg-[url(/public/images/img_group_191.svg)] bg-cover bg-no-repeat md:h-auto">
                              <Img
                                src="images/img_floating_icon.svg"
                                alt="Floatingicon"
                                className="h-[2.50rem]"
                              />
                            </div>
                            <Img
                              src="images/img_vector_black_900_16x114.svg"
                              alt="Vector"
                              className="mb-[0.50rem] h-[1.00rem] w-[50%] self-end object-contain"
                            />
                          </div>
                          <div className="flex w-[34%] justify-end gap-[0.94rem]">
                            <div className="h-[2.50rem] w-[0.06rem] bg-black-900_7f" />
                            <div className="flex h-[2.50rem] w-[36%] flex-col items-center bg-[url(/public/images/img_group_190.svg)] bg-cover bg-no-repeat p-[0.63rem] md:h-auto">
                              <Img
                                src="images/img_menu_black_900.svg"
                                alt="Menu"
                                className="h-[1.13rem]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_close_black_900.svg"
                  alt="Close"
                  className="absolute right-[1.69rem] top-[8%] m-auto h-[1.63rem]"
                />
                <Img
                  src="images/img_thumbs_up_black_900.svg"
                  alt="Thumbsup"
                  className="absolute right-[31%] top-[13%] m-auto h-[0.88rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export { ConnectAndCollaborate };