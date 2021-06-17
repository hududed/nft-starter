import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>NFTstamp</h2>
          <h3>stamp NFT collections</h3>
          <p>powered by Cardano blockchain technologies</p>
          <Link className={styles.btn} to="/projects">Explore collectibles</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`