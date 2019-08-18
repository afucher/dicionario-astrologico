import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const APage = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => (
  <Layout>
    <SEO title="Letra C" />
    <h1>C</h1>
    {edges.map(edge => <p>{edge.node.frontmatter.title}</p>)}
  </Layout>
)

export default APage

export const letterAQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___title]}, filter: {frontmatter: {path: {glob: "/c/*"}}}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`