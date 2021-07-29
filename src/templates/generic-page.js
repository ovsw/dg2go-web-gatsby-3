import * as React from "react";
import { graphql } from "gatsby";

const GenericPageTemplate = (props) => {
  // const { data, errors, location } = props;
  // const page = data && data.page;

  return <p>this is a generic page</p>;
};

export default GenericPageTemplate;

// export const query = graphql`
//   query GenericPageTemplateQuery($id: String!) {
//     page: sanityPage(id: { eq: $id }) {
//       id
//       seoTitle
//       seoDescription
//       title
//       slug {
//         current
//       }
//       _rawBody(resolveReferences: { maxDepth: 5 })
//     }
//   }
// `;
