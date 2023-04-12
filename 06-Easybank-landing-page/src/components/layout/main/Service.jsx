import propTypes from "prop-types"
import React from "react"

export default function Service({ icon, iconAlt, title, description }) {
    return (
        <div className="service">
            <div className="service__icon">
                <img className="service__icon" src={icon} alt={iconAlt} />
            </div>
            <h3 className="service__title">{title}</h3>
            <p className="service__description">{description}</p>
        </div>
    )
}
Service.propTypes = {
    icon: propTypes.node,
    iconAlt: propTypes.string,
    title: propTypes.string,
    description: propTypes.string
}
