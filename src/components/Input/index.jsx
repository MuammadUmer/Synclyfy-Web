import React from "react";
import PropTypes from "prop-types";
const shapes = { round: "rounded-[22px]" };
const variants = {
  fill: {
    blue_gray_900: "bg-blue_gray-900 text-white-a700",
    blue_gray_100: "bg-blue_gray-100 text-cyan-800",
    cyan_800: "bg-cyan-800 text-white-a700",
  },
  outline: { cyan_800: "border-cyan-800 border border-solid text-gray-500_01" },
};
const sizes = {
  xs: "h-[2.25rem] px-[0.63rem] text-[0.94rem]",
  md: "h-[3.25rem] px-[0.75rem] text-[1.25rem]",
  sm: "h-[2.75rem] px-[2.00rem] text-[0.94rem]",
  lg: "h-[4.13rem] px-[0.75rem]",
};
const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "lg",
      color = "cyan_800",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${
          shape && shapes[shape]
        } ${variant && (variants[variant]?.[color] || variants[variant])} ${
          size && sizes[size]
        }`}
      >
        {!!label && label} {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "md", "sm", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_900",
    "blue_gray_100",
    "cyan_800",
    "cyan_800",
  ]),
};
export { Input };
