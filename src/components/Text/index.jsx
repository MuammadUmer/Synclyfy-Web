import React from "react";
const sizes = {
  textxs: "text-[0.63rem] font-normal not-italic",
  textmd: "text-[0.75rem] font-normal not-italic",
  textlg: "text-[0.81rem] font-normal not-italic",
  textxl: "text-[0.88rem] font-normal not-italic",
  text2xl: "text-[0.94rem] font-normal",
  text4xl: "text-[1.06rem] font-normal not-italic",
  text6xl: "text-[1.25rem] font-normal not-italic",
  text7xl: "text-[1.50rem] font-normal md:text-[1.38rem]",
  text8xl: "text-[1.56rem] font-light md:text-[1.44rem] sm:text-[1.31rem]",
  text9xl:
    "text-[1.88rem] font-normal not-italic md:text-[1.75rem] sm:text-[1.63rem]",
  text10xl: "text-[2.00rem] font-hairline md:text-[1.88rem] sm:text-[1.75rem]",
  text11xl:
    "text-[2.25rem] font-normal not-italic md:text-[2.13rem] sm:text-[2.00rem]",
  text12xl:
    "text-[2.50rem] font-hairline not-italic md:text-[2.38rem] sm:text-[2.25rem]",
  text13xl: "text-[3.13rem] font-hairline md:text-[2.88rem] sm:text-[2.50rem]",
  text14xl: "text-[3.75rem] font-light md:text-[3.25rem] sm:text-[2.88rem]",
};
const Text = ({
  children,
  className = "",
  as,
  size = "text6xl",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-white-a700 font-saira ${className} ${sizes[size]}`}
      {...restProps}
    >
      {" "}
      {children}{" "}
    </Component>
  );
};
export { Text };
