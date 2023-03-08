import React from "react"

import useMenu from "../../hooks/useMenu"
import MenuIcon from "../icons/MenuIcon"

export default function Navbar() {
    const { menuOpen, navbarStyle, changeMenuState } = useMenu()

    return (
        <>
            <button onClick={changeMenuState} className="toggle-button" type="button">
                <MenuIcon className={menuOpen ? "open" : ""} />
            </button>
            <nav className={`${navbarStyle} ${menuOpen ? "show-up" : "fade-out"}`}>
                <ul className={`nav-list ${menuOpen ? "slide-down" : "slide-up"}`}>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Careers
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
