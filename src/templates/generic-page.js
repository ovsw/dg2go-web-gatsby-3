import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const GenericPageTemplate = (props) => {
  const { data } = props;
  const page = data && data.page && data.page.content;

  return (
    <Layout>
      <h1>{page.title}</h1>
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
            gatsbyImageData(
              fit: CROP
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
            )
          }
        }
        _rawBody(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
