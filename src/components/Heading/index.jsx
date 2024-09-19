import React from "react";
const sizes = {
  texts: "text-[0.69rem] font-medium",
  text3xl: "text-[1.00rem] font-medium",
  text5xl: "text-[1.13rem] font-medium",
  headingxs: "text-[0.75rem] font-semibold",
  headings: "text-[0.81rem] font-bold",
  headingmd: "text-[0.88rem] font-semibold",
  headinglg: "text-[0.94rem] font-semibold",
  headingxl: "text-[1.00rem] font-bold",
  heading2xl: "text-[1.06rem] font-semibold",
  heading3xl: "text-[1.13rem] font-semibold",
  heading4xl: "text-[1.25rem] font-semibold",
  heading5xl:
    "text-[2.00rem] font-semibold md:text-[1.88rem] sm:text-[1.75rem]",
  heading6xl: "text-[2.50rem] font-bold md:text-[2.38rem] sm:text-[2.25rem]",
  heading7xl:
    "text-[3.00rem] font-semibold md:text-[2.75rem] sm:text-[2.38rem]",
  heading8xl:
    "text-[3.13rem] font-semibold md:text-[2.88rem] sm:text-[2.50rem]",
  heading9xl:
    "text-[3.75rem] font-semibold md:text-[3.25rem] sm:text-[2.88rem]",
  heading10xl: "text-[4.06rem] font-semibold md:text-[3.00rem]",
  heading11xl: "text-[5.06rem] font-semibold md:text-[3.00rem]",
};
const Heading = ({
  children,
  className = "",
  size = "text3xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-white-a700 font-montserrat ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Heading };
