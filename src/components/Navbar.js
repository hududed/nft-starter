import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

export default function Navbar() {
    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                 }
            }
        }
  `)
  const { title } = data.site.siteMetadata


    return (
        <nav>
            <h1>{ title }</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/guide">Guide</Link>
                <Link to="/projects">NFT stamps</Link>
            </div>
        </nav>
    )
}
