import propTypes from "prop-types"
import React from "react"

//Ícone utilizado em Header.jsx.
export default function MenuIcon({ className }) {
    return (
        <div className={`flex flex-col gap-1 items-center ${className || ""}`}>
            <span className="menu-icon-bars"></span>
            <span className="menu-icon-bars"></span>
            <span className="menu-icon-bars"></span>
        </div>
    )
}

MenuIcon.propTypes = {
    className: propTypes.string
}
