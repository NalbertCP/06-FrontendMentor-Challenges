import propTypes from "prop-types"
import React from "react"

export default function NavLink({ href = "#", target = "_self", className, content }) {
    return (
        <a href={href} target={target} className={`navbar__link ${className || ""}`}>
            {content}
        </a>
    )
}
NavLink.propTypes = {
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    content: propTypes.node
}
