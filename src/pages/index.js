import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import SectionsManager from "../components/sections/sectionsManager";

// markup
export default function IndexPage({ data }) {
  const homePageContent = data && data.homePage && data.homePage.content;
  const sanityHeroData = homePageContent.hero;

  return (
    <Layout>
      <Hero heroData={sanityHeroData} />
      {homePageContent.sections.map((section) => {
        return <SectionsManager section={section} key={section._key} />;
      })}
    </Layout>
  );
}

export const query = graphql`
  query SiteHome {
    homePage: sanitySiteHome(_id: { eq: "siteHome" }) {
      content {
        hero {
          image {
            asset {
              gatsbyImageData(
                layout: FULL_WIDTH
                height: 500
                placeholder: NONE
                fit: CROP
              )
            }
          }
          button {
            text
            url
          }
          subTitle
          title
          _rawText(resolveReferences: { maxDepth: 5 })
        }
        seo {
          description
          title
        }
        sections {
          ... on SanityCtaSection {
            _key
            _type
            title
            subtitle
            button1 {
              text
              url
            }
            _rawText(resolveReferences: { maxDepth: 5 })
            image {
              asset {
                gatsbyImageData(layout: CONSTRAINED, fit: CROP)
              }
            }
          }
          ... on SanityMagSection {
            _key
            _type
            eyebrow
            button1 {
              text
              url
            }
            subtitle
            title
            video
            _rawText(resolveReferences: { maxDepth: 5 })
            image {
              asset {
                gatsbyImageData(layout: CONSTRAINED, fit: CROP)
              }
              alt
            }
          }
          ... on SanityReusedSection {
            _key
            _type
            reusableSection {
              _rawSections(resolveReferences: { maxDepth: 5 })
            }
          }
        }
      }
    }
  }
`;
