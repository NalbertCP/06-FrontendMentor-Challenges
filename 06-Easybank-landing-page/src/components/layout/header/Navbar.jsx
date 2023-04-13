import React from "react"

import useMenu from "../../../hooks/useMenu"
import MenuIcon from "../../icons/MenuIcon"
import NavLink from "./NavLink"

export default function Navbar() {
    const { menuOpen, changeMenuState } = useMenu()

    return (
        <>
            <button onClick={changeMenuState} className="hamburger-btn" type="button">
                <MenuIcon className={menuOpen ? "open" : ""} />
            </button>
            <nav className={`navbar ${menuOpen ? "navbar--show" : ""}`}>
                <ul
                    className={`navbar__link-list ${
                        menuOpen ? "navbar__link-list--show" : ""
                    }`}
                >
                    <li className="navbar__link-item">
                        <NavLink
                            className={menuOpen ? "" : "navbar__link--hidden"}
                            content="Home"
                        />
                    </li>
                    <li className="navbar__link-item">
                        <NavLink
                            className={menuOpen ? "" : "navbar__link--hidden"}
                            content="About"
                        />
                    </li>
                    <li className="navbar__link-item">
                        <NavLink
                            className={menuOpen ? "" : "navbar__link--hidden"}
                            content="Contact"
                        />
                    </li>
                    <li className="navbar__link-item">
                        <NavLink
                            className={menuOpen ? "" : "navbar__link--hidden"}
                            content="Blog"
                        />
                    </li>
                    <li className="navbar__link-item">
                        <NavLink
                            className={menuOpen ? "" : "navbar__link--hidden"}
                            content="Careers"
                        />
                    </li>
                </ul>
            </nav>
        </>
    )
}
