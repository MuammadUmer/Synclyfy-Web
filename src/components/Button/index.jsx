import React from "react";
import PropTypes from "prop-types";
const shapes = {
  square: "rounded-[0px]",
  round: "rounded-lg",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    black_900_26: "bg-black-900_26 shadow-md text-white-a700",
    cyan_800: "bg-cyan-800 text-white-a700",
    orange_200: "bg-orange-200 text-black-900",
    blue_gray_800: "bg-blue_gray-800 text-white-a700",
    blue_gray_50: "bg-blue_gray-50",
    blue_gray_900_04: "bg-blue_gray-900_04 text-white-a700",
    black_900_d8: "bg-black-900_d8 text-white-a700",
    blue_gray_100: "bg-blue_gray-100 text-cyan-800",
    gray_900_02: "bg-gray-900_02",
  },
};
const sizes = {
  "4xl": "h-[4.25rem] px-[1.25rem] text-[1.00rem]",
  "5xl": "h-[6.25rem] px-[0.50rem]",
  md: "h-[2.25rem] px-[2.13rem] text-[0.94rem]",
  "6xl": "h-[8.50rem] px-[2.13rem] text-[2.00rem]",
  "3xl": "h-[3.75rem] px-[1.00rem] text-[2.00rem]",
  lg: "h-[2.50rem] px-[0.50rem]",
  "2xl": "h-[3.38rem] px-[1.75rem] text-[1.88rem]",
  sm: "h-[1.50rem] px-[0.38rem] text-[0.75rem]",
  xl: "h-[3.25rem] px-[1.75rem] text-[1.25rem]",
  xs: "h-[1.50rem] px-[0.25rem]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_900_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon} {children} {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf([
    "4xl",
    "5xl",
    "md",
    "6xl",
    "3xl",
    "lg",
    "2xl",
    "sm",
    "xl",
    "xs",
  ]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "black_900_26",
    "cyan_800",
    "orange_200",
    "blue_gray_800",
    "blue_gray_50",
    "blue_gray_900_04",
    "black_900_d8",
    "blue_gray_100",
    "gray_900_02",
  ]),
};
export { Button };
