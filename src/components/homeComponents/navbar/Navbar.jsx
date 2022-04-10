import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='NavContainer'>
            <nav>
                <ul>
                    <li>
                        <a href="#Home">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#About">
                            <i className="fa-solid fa-list"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=81AShKbT_TY">
                            <i className="fa-solid fa-box-open"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=81AShKbT_TY">
                            <i className="fa-solid fa-mobile"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar