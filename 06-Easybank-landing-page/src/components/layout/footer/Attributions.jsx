import React from "react"

//Componente utilizado em Footer.jsx.
export default function Attributions() {
    return (
        <div className="block text-[var(--grayish-blue)] text-sm">
            <a
                className="hover:text-[var(--lime-green)] transition duration-[250ms]"
                href="https://www.frontendmentor.io/"
                target="_blank"
                rel="noreferrer"
            >
                <b>Front-end Mentor. </b>
            </a>
            <span>
                <a href="https://github.com/nalbertcerqueira"></a>
                Coded by{" "}
                <a
                    className="hover:text-[var(--lime-green)] transition duration-[250ms]"
                    target="_blank"
                    href="https://github.com/nalbertcerqueira"
                    rel="noreferrer"
                >
                    Nalbert Cerqueira
                </a>
            </span>
        </div>
    )
}
