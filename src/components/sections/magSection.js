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
      class="[ magSection ] wrapper my-grd lg:flex"
    >
      <div class="[ magSection__image ] relative flex-1 2xl:ml-grd">
        <GatsbyImage image={sectionImage} />
      </div>

      <div class="[ magSection__content ] flex-1 border-4 border-green m-grd p-6 space-y-6 md:border-5 md:p-10 lg:max-w-2xl lg:p-20 lg:my-0 flex flex-col justify-center border-green">
        <div class="space-y-10">
          <div>
            <p class="eyebrow text-green-dark"></p>
            <h2 class="mt-2">{title}</h2>
          </div>

          <h3 class="[ subtitle text-xl font-bold ]">{subtitle}</h3>

          <div class="magSection__rteWrapper">
            <div class="prose text-lg">
              <PortableText blocks={_rawText} />
            </div>
          </div>
        </div>

        <div class="magSection__buttonWrapper">
          <div class="cluster-l">
            <div>
              <a href={button1.url} class="button bg-green-dark text-light">
                <span class="relative inset-y-0.5 mr-2">{button1.text}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
