import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components";
import Header from "../../components/Header";
import React from "react";

export default function ArticleslearnmorePage() {
  return (
    <>
      <Helmet>
        <title>Synclyfy</title>
        <meta
          name="description"
          content="Synclyfy, a platform for meeting the talent"
        />
      </Helmet>

      {/* Set min-h-screen to ensure full height background */}
      <div className="flex w-full flex-col items-center gap-6 bg-gradient7 px-4 py-4 md:gap-8 sm:gap-5 min-h-screen">
        <Header className="self-stretch bg-blue-50_01" />
        <div className="mx-auto mb-[0.25rem] mt-[3rem] flex w-full max-w-[78.25rem] flex-col items-center self-stretch">
          <Heading size="heading9xl" as="h1" className="!font-bold font-saira">
            Coming soon!
          </Heading>
          <Heading
            size="heading9xl"
            as="h2"
            className="mt-[0.50rem] self-stretch text-center !font-bold leading-[150%] font-saira"
          >
            Unlock exclusive access to insightful articles once you join our
            waiting list. Don’t miss out —secure your spot today!
          </Heading>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            <Button
              color="cyan_800"
              size="3xl"
              className="mt-[5.28rem] min-w-[10.50rem] rounded-[30px] font-light font-roboto"
            >
              Join Now
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
