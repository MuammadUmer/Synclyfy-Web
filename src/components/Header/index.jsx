import { Text, Img, Button } from "./..";
import React from "react";
export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center p-[1.13rem] rounded-[20px]`}
    >

      <div className="mx-auto flex w-full max-w-[82.38rem] items-center justify-between gap-[1.25rem] sm:flex-col">

        <Img
          src="images/img_header_logo.svg"
          alt="Headerlogo"
          className="h-[3.38rem] w-[19.63rem] object-contain"
        />
        <div className="flex flex-1 items-center justify-end gap-[4.88rem] self-center md:gap-[1rem] md:self-stretch sm:w-full sm:gap-[2.88rem] sm:justify-center">
          <a
            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
            target="_blank"
          >
            <Text
              size="text10xl"
              as="p"
              className="self-end !font-normal !text-black-900"
            >
              Pricing
            </Text>
          </a>
          <a
            href="https://www.youtube.com/embed/bv8Fxk0sz7I"
            target="_blank"
          >
            <Button
              color="cyan_800"
              size="3xl"
              className="min-w-[10.50rem] rounded-[30px] font-roboto"
            >
              Join Now
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
