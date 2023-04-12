import React from "react"

import FancyButton from "../../FancyButton"
import Navbar from "./Navbar"
import logo from "/images/logo.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="inner-container header__inner">
                <div className="header__brand">
                    <img src={logo} alt="easybank logo" />
                </div>
                <Navbar />
                <div className="header__btn-wrapper">
                    <FancyButton className="btn btn--cta" />
                </div>
            </div>
        </header>
    )
}
