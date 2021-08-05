import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PortableText from "../atoms/portableText";

export default function MagSection({ sectionData }) {
  const { eyebrow, title, subtitle, image, _rawText, button1 } = sectionData;

  const sectionImage = getImage(image.asset);

  return (
    <section
      data-v-28b2fd86=""
      data-theme="frame"
      data-theme-color="green"
      className="[ magSection ] wrapper my-grd lg:flex"
    >
      <div className="[ magSection__image ] relative flex-1 2xl:ml-grd">
        <GatsbyImage
          image={sectionImage}
          className="w-full h-full object-cover"
          alt={image.alt}
        />
      </div>

      <div className="[ magSection__content ] flex-1 border-4 border-green m-grd p-6 space-y-6 md:border-5 md:p-10 lg:max-w-2xl lg:p-20 lg:my-0 flex flex-col justify-center border-green">
        <div className="space-y-10">
          <div>
            <p className="eyebrow text-green-dark">{eyebrow}</p>
            <h2 className="mt-2">{title}</h2>
          </div>

          <h3 className="[ subtitle text-xl font-bold ]">{subtitle}</h3>

          <div className="magSection__rteWrapper">
            <div className="prose text-lg">
              <PortableText blocks={_rawText} />
            </div>
          </div>
        </div>

        <div className="magSection__buttonWrapper">
          <div className="cluster-l">
            <div>
              <a href={button1.url} className="button bg-green-dark text-light">
                <span className="relative inset-y-0.5 mr-2">
                  {button1.text}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
