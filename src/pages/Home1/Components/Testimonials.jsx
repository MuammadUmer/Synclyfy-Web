import React from "react";

const { Heading, Text, Img, Slider } = require("components")

const dataArray = [
    {
        key: "img_avatars_3d_avatar_1",
        src: "images/img_avatars_3d_avatar_1.png",
        alt: "Avatars3d",
        text: `Synclyfy has revolutionized my tech
         journey! From easy event registrations
         and secure payments to connecting with
         global enthusiasts and sharing on social
         media, it's all here.The
         inter - university hackathons are a
         highlight, and Catbot adds a fun touch.
         Love this app!`,
        name: `-Founder Xyz`
    },
    {
        key: "img_testimonial_cat",
        src: "images/img_testimonial_cat.png",
        alt: "ImageCatbot",
        text: `Synclyfy has made networking at tech events effortless. The platform's seamless integration with social media lets me share updates instantly. I’ve met amazing people through the virtual communities and gained insights from industry leaders. The event reminders and easy RSVP process are game-changers. Highly recommend it!`,
        name: `-Founder CatBot`
    },
    {
        key: "img_testimonial__avatar_16",
        src: "images/img_testimonial__avatar_16.png",
        alt: "Avatars16",
        text: `As a tech enthusiast, Synclyfy has been a game-changer for staying updated on upcoming events. The app's user-friendly interface makes it simple to navigate, and I love how it brings together techies from different universities. Catbot is a quirky addition that keeps things light and engaging. This app has it all!`,
        name: `-Founder Xyz`
    },
    {
        key: "img_testimonial__avatar_27",
        src: "images/img_testimonial__avatar_27.png",
        alt: "Avatars27",
        text: `Synclyfy is the ultimate platform for tech event enthusiasts! The convenience of secure payments and quick event registrations has saved me so much time. The inter-university hackathons are a fantastic way to challenge myself, and the connections I’ve made through the app have been invaluable. Synclyfy is a must-have for anyone in tech!`,
        name: `-Founder Xyz`
    },
    {
        key: "img_testimonial__avatar_26",
        src: "images/img_testimonial__avatar_26.png",
        alt: "Avatars26",
        text: `Synclyfy brings the tech community together like no other platform. The networking opportunities are incredible, and the ability to join discussions with global enthusiasts has expanded my knowledge and connections. The app’s features, like event notifications and Catbot, make the whole experience engaging and fun. Synclyfy truly enhances my tech journey!`,
        name: `-Founder Xyz`
    },
]

const Testimonials = () => {
    const [sliderState, setSliderState] = React.useState(1);
    const sliderRef = React.useRef(null);

    const SliderButton = () => {
        return (
            <div className="absolute bottom-[14%] left-0 right-0 m-auto flex w-[24%] justify-end gap-[0.50rem]">
                <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-teal-700" />
                <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-blue_gray-100" />
                <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-blue_gray-100" />
                <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-blue_gray-100" />
                <div className="h-[1.13rem] w-[1.13rem] rounded-lg bg-blue_gray-100" />
            </div>
        )
    }
    return (
        <div className="relative z-[17] mt-[-10.38rem] left-0 right-0 h-[96.6rem]">
            <div className="absolute top-[35%] left-0 right-0 w-full flex flex-col items-start">
                <Img
                    src="images/img_polygon_1.png"
                    alt="Polygonone"
                    className="h-[90.25rem] w-[65%] rounded-[30px] object-contain"
                />
            </div>
            <div className="absolute bottom-[0rem] left-0 right-0 flex w-full flex flex-col items-end">
                <Img
                    src="images/img_polygon_2.png"
                    alt="Polygontwo"
                    className="h-[90.25rem] w-[65%] rounded-[30px] object-contain"
                />
            </div>
            <div className="absolute left-0 right-0 top-[0.00rem] h-[98rem] w-full py-[6.63rem] md:py-[1.25rem]">
                <div className="absolute bottom-[16%] left-0 right-0 m-auto w-[70%] px-[3.50rem] md:px-[1.25rem]">
                    <div className="relative mb-[0.88rem] h-[18.75rem] content-center md:h-auto">
                        <div className="mx-auto flex w-full">
                            <Slider
                                autoPlay
                                autoPlayInterval={2000}
                                responsive={{
                                    0: { items: 1 },
                                    551: { items: 1 },
                                    1051: { items: 1 },
                                }}
                                disableDotsControls
                                activeIndex={sliderState}
                                onSlideChanged={(e) => {
                                    setSliderState(e?.item);
                                    console.log(sliderState)
                                }}
                                ref={sliderRef}
                                items={dataArray.map((data) => (
                                    <React.Fragment key={data.key}>
                                        <div className="flex items-center rounded-[150px] border-2 border-solid backdrop-blur-md border-teal-700 bg-white-a700_19 p-[1.63rem] md:flex-col sm:p-[1.25rem]">
                                            <Img
                                                src={data.src}
                                                alt={data.alt}
                                                className="my-[1.13rem] ml-[1rem] h-[13.00rem] w-[13.00rem] object-cover md:w-full"
                                            />
                                            <div className="flex flex-1 flex-col items-end gap-[2rem] self-end px-[2.13rem] md:self-stretch sm:self-auto">
                                                <Text
                                                    as="p"
                                                    className="font-saira font-thin w-[90%] leading-[150%] !text-black-900 md:w-full"
                                                >
                                                    {data.text}
                                                </Text>
                                                <Text
                                                    size="text2xl"
                                                    as="p"
                                                    className="mr-[7.88rem] font-saira  font-light !text-black-900 md:mr-0"
                                                >
                                                    {data.name}
                                                </Text>
                                            </div>
                                            <div className="absolute bottom-[14%] left-0 right-0 m-auto flex w-[24%] justify-end gap-[0.50rem]">
                                                {dataArray.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className={`h-[1.13rem] w-[1.13rem] rounded-lg ${sliderState == index + 1 ? 'bg-teal-700' : 'bg-blue_gray-100'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export { Testimonials };