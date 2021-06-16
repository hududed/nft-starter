import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>NFTstamp</h2>
          <h3>stamp NFT collections</h3>
          <p>powered by Cardano blockchain technologies</p>
          <Link className={styles.btn} to="/projects">Explore collectibles</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }}/>
        <p>{ title } - { description } </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`