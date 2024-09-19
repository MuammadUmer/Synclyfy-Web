const { Img } = require("components")

const VirtualEvents = () => {
    return (
        <div className="relative h-[51.50rem] w-[92%]">
            <Img
                src="images/img_26651648_107_1.png"
                alt="Image Twelve"
                className="absolute bottom-0 left-[3%] top-0 my-auto h-[48.38rem] w-[90%] rounded-[50px] object-contain"
            />
            <Img
                src="images/img_map1_1.png"
                alt="Map1one"
                className="absolute bottom-[-0.06rem] left-[0.00rem] m-auto h-[37.50rem] w-[32%] object-contain"
            />
            <Img
                src="images/img_map2_1.png"
                alt="Map2one"
                className="absolute right-[0.06rem] top-[0.63rem] m-auto h-[38.13rem] w-[34%] object-contain"
            />
        </div>
    )
}
export { VirtualEvents };