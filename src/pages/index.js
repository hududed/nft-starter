import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>NFTstamp</h2>
          <h3>stamp NFT collections</h3>
          <p>powered by Cardano blockchain technologies</p>
          <Link className={styles.btn} to="/projects">Explore collectibles</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}