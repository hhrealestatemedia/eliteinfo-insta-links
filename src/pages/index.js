import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Button from 'react-bootstrap/Button'
import './index.css'

export const IndexPageTemplate = ({ items }) => {

  function addhttps(url) {
      // eslint-disable-next-line
      if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
          url = "https://" + url;
      }
      return url;
  }

  const bkgroundImg = !!items.image.childImageSharp
    ? items.image.childImageSharp.fluid.src
    : items.image

  const container = {
      minHeight: '100vh',
      background: `url(${bkgroundImg})`,
      paddingTop: '25px',
  }

  return (
    <div style={container}>
      <div className="IndexPageTemplate">
          <div className="col-md-4 offset-md-4">
              <img src="/img/ae_long_800x200.png" alt="Agent Elite Logo"/>
              {items.links.map((link, index) => { 

                let url = addhttps(link.url)

                return (
                  // eslint-disable-next-line
                  <a href={url} key={index} target="_blank">
                    <Button variant="outline-light" size="lg" block>{link.name}</Button>
                  </a>
                )
              })}
          </div>
      </div>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  items: PropTypes.object.isRequired
}

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <IndexPageTemplate
          items={posts[0].node.frontmatter}
        />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Insta Links" } }}
    ) {
      edges {
        node {
          frontmatter {
            links {
              name,
              url
            }
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
