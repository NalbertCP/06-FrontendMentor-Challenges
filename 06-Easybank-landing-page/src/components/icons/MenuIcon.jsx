import propTypes from "prop-types"
import React from "react"

//Ícone utilizado em Header.jsx.
export default function MenuIcon({ className }) {
    return (
        <div className={`hamburger-btn__icons-wrapper ${className || ""}`}>
            <span className="hamburger-btn__icon"></span>
            <span className="hamburger-btn__icon"></span>
            <span className="hamburger-btn__icon"></span>
        </div>
    )
}

MenuIcon.propTypes = {
    className: propTypes.string
}
