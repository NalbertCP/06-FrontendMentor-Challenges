import React from "react"

import useMenu from "../../../hooks/useMenu"
import MenuIcon from "../../icons/MenuIcon"
import NavLink from "./NavLink"

export default function Navbar() {
    const { menuOpen, changeMenuState } = useMenu()
    const linkList = ["Home", "About", "Contact", "Blog", "Careers"]

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
                    {linkList.map((linkName) => (
                        <li key={linkName} className="navbar__link-item">
                            <NavLink
                                className={menuOpen ? "" : "navbar__link--hidden"}
                                content={linkName}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
