import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const GenericPageTemplate = (props) => {
  const { data } = props;
  const page = data && data.page && data.page.content;
  const headerImage = getImage(page.image.asset);

  return (
    <Layout>
      <h1>{page.title}</h1>
      <GatsbyImage image={headerImage} alt="PLACEHOLDER" />
      <p>this is a generic page</p>
    </Layout>
  );
};

export default GenericPageTemplate;

export const query = graphql`
  query GenericPageTemplateQuery($_id: String!) {
    page: sanityPage(_id: { eq: $_id }) {
      id
      _id
      content {
        title
        seo {
          title
          description
        }
        slug {
          current
        }
        image {
          asset {
            altText
            gatsbyImageData(fit: CROP, layout: FULL_WIDTH, placeholder: NONE)
          }
        }
        _rawBody(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
