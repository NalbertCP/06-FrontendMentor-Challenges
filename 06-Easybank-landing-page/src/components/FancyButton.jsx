import propTypes from "prop-types"
import React from "react"

//Botão utilizado em Header, IntroSection e Footer.jsx.
export default function FancyButton({ className }) {
    return (
        <button className={`${className || ""}`} type="button">
            Request Invite
        </button>
    )
}
FancyButton.propTypes = {
    className: propTypes.string
}
