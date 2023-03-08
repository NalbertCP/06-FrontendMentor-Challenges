import React from "react"

import FancyButton from "../FancyButton"
import Navbar from "./Navbar"

export default function Header() {
    return (
        <header>
            <div className="inner-container">
                <div className="w-max shrink-0">
                    <img src="./public/images/logo.svg" alt="easybank logo" />
                </div>
                <Navbar />
                <div className="flex-shrink-0 hidden mdd:block">
                    <FancyButton />
                </div>
            </div>
        </header>
    )
}
