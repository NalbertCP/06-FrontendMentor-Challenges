import React from "react"

import FancyButton from "../FancyButton"
import Navbar from "./Navbar"
import logo from "/images/logo.svg"

export default function Header() {
    return (
        <header>
            <div className="inner-container">
                <div className="w-max shrink-0">
                    <img src={logo} alt="easybank logo" />
                </div>
                <Navbar />
                <div className="flex-shrink-0 hidden mdd:block">
                    <FancyButton />
                </div>
            </div>
        </header>
    )
}
