import propTypes from "prop-types"
import React from "react"
import ArrowUpIcon from "./icons/ArrowIcon"

//Botão utilizado em App.jsx para voltar ao topo da página.
export default function ScrollUpButton({ isVisible }) {
    const hidden = "translate-y-20"
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div className={`scrollup ${isVisible ? "" : hidden}`}>
            <button onClick={scrollTop} className="scrollup__button ">
                <div className="p-1 ring-2 ring-white/40 rounded-full">
                    <ArrowUpIcon />
                </div>
            </button>
        </div>
    )
}
ScrollUpButton.propTypes = {
    isVisible: propTypes.bool
}
