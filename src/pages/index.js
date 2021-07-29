import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SectionsManager from "../components/sections/sectionsManager";

// markup
export default function IndexPage({ data }) {
  const homePage = data && data.homePage && data.homePage.content;
  return (
    <Layout>
      <main>
        <p className="text-green-600">test</p>
        {homePage.sections.map((section) => {
          return <SectionsManager section={section} key={section._key} />;
        })}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query SiteHome {
    homePage: sanitySiteHome(_id: { eq: "siteHome" }) {
      content {
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
