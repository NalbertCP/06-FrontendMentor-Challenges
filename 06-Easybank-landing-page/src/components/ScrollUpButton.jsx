import propTypes from "prop-types"
import React from "react"
import ArrowUpIcon from "./icons/ArrowIcon"

//Botão utilizado em App.jsx para voltar ao topo da página.
export default function ScrollUpButton({ isVisible }) {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div
            className={`w-fit h-fit fixed right-6 bottom-6 rounded-full
            transition duration-500 ${isVisible ? "" : "hide-down"}`}
        >
            <button onClick={scrollTop} className="scrollup-button">
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
