import React from 'react'
import {Link} from 'react-router-dom'

export const Navigation = () => {
    return (
        <header>
            
            <div className="container">
                <div className="inner-content">
                    <div className="logo">
                        <Link to="/"><img src="logo.svg" width="53px" height="44px"></img></Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watch List</Link>
                        </li>
                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link to="/add" className="btn">+ Add Movie</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
