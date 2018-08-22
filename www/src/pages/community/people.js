import React, { Component } from "react"
import { graphql } from "gatsby"
import CommunityView from "../../views/community"

class PeoplePage extends Component {
  render() {
    const { location, data } = this.props
    console.log(data)
    return <CommunityView data={data} location={location} title={`People`} />
  }
}

export default PeoplePage

export const pageQuery = graphql`
  query {
    allCreatorsYaml(filter: { type: { eq: "individual" } }) {
      edges {
        node {
          name
          description
          website
          github
          for_hire
          portfolio
          fields {
            slug
          }
        }
      }
    }
  }
`
