import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>NFT stamps</h2>
                <h3>Stamps I've collected</h3>
                <div className={styles.projects}>
                    {projects.map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                                {/* <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} /> */}
                                <h3>{project.frontmatter.title}</h3>
                            </div>

                        </Link>
                    ))}
                </div>
                <p>Lets work! Contact { contact } </p>
            </div>   
        </Layout>
    )
}

// export page query
export const query = graphql`
query NFTCollectiblesPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }   
`