// const { isFuture } = require("date-fns");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createGenericPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage(filter: { content: { slug: { current: { ne: null } } } }) {
        edges {
          node {
            _id
            content {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];

  pageEdges.forEach((edge, index) => {
    const {
      id,
      content: { slug = {} },
    } = edge.node;
    const path = `/${slug.current}/`;

    reporter.info(`Creating generic page: ${path}`);

    createPage({
      path,
      component: require.resolve("./src/templates/generic-page.js"),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createGenericPages(graphql, actions, reporter);
};
