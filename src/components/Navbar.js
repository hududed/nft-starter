import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>NFT-starter</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/guide">Guide</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}
