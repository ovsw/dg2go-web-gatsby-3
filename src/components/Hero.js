import * as React from "react";

import { BgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";
import PortableText from "./atoms/portableText";

const Hero = ({ heroData }) => {
  // hero

  const { title, subTitle, image, button, _rawText } = heroData;
  const heroBgImage = getImage(image.asset);

  return (
    <div className="heroWrapper lg:relative  mb-grd">
      <BgImage
        image={heroBgImage}
        data-id="heroImage"
        className="heroImage relative bg-top xl:bg-cover"
      >
        <div className="wrapper sm:px-6 sm:py-6 md:py-20 lg:py-28 xl:py-36 lg:px-8">
          <div className="relative sm:rounded-2xl sm:overflow-hidden md:shadow-xl lg:max-w-xl">
            <div className="relative px-4 py-16 bg-light bg-opacity-95 sm:px-6 sm:py-24 md:py-16 lg:py-16 lg:px-16">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:text-left">
                <span className="block text-dark max-w-2xl mx-auto lg:mx-0">
                  {title}
                </span>
              </h1>
              <p>{subTitle}</p>
              <div className="mt-8 md:mt-12 mx-auto text-center text-xl text-dark sm:max-w-3xl lg:text-left lg:mx-0">
                <PortableText blocks={_rawText} />
              </div>
              {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center lg:justify-start">
                <div className="space-y-4 text-center sm:space-y-0 sm:mx-auto sm:gap-5 lg:mx-0 lg:text-left">
                  <a
                    href="/passes/all-day-fun-pass/"
                    className="button [ button ] bg-yellow text-dark hover:text-dark-dark mt-4 md:mr-4"
                  >
                    All-Day Fun Pass Information
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </BgImage>
    </div>
  );
};

export default Hero;
