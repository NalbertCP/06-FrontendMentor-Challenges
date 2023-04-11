import propTypes from "prop-types"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

//Componente responsável por atribuir efeitos de transição
//durante eventos de scroll, para alguns elementos da página
export default function ScrollRevealContainer({ children }) {
    function headerReveal() {
        const innerContainer = document.querySelector("header > .inner-container")
        if (window.innerWidth > 900) {
            ScrollReveal().reveal(innerContainer, { duration: 1000 })
        } else {
            innerContainer.classList.add("is-visible")
        }
    }
    function navbarReveal() {
        const navItems = document.querySelectorAll(".nav-item")
        if (window.innerWidth > 900) {
            ScrollReveal().reveal(navItems, {
                delay: 400,
                interval: 200,
                distance: "-25%",
                origin: "bottom"
            })
        } else {
            Array.from(navItems).map((navItem) => navItem.classList.add("is-visible"))
        }
    }
    function footerReveal() {
        const socialWrapper = document.querySelector(".social-wrapper")
        const linksFooter = document.querySelector("footer .link-list")
        const credits = document.querySelector(".credits-wrapper")
        ScrollReveal().reveal([socialWrapper, linksFooter, credits], {
            interval: 200,
            distance: "-25%",
            origin: "top"
        })
    }

    function phonesReveal() {
        const phoneMockups = document.querySelector(".mockups-wrapper")
        if (window.innerWidth > 900) {
            ScrollReveal().reveal(phoneMockups, { delay: 1600 })
        } else {
            phoneMockups.classList.add("is-visible")
        }
    }
    function introReveal() {
        const title = document.querySelector(".main-title")
        const paragraph = document.querySelector(".main-title + p")
        const fancyButton = document.querySelector(".intro-section .req-invite-button")

        ScrollReveal().reveal([title, paragraph, fancyButton], {
            interval: 200,
            delay: window.innerWidth > 900 ? 1400 : 400,
            distance: "-25%",
            origin: "top"
        })
    }
    function servicesReveal() {
        const title = document.querySelector(".services-section h2")
        const paragraph = document.querySelector(".services-section h2 + p")
        const defaultReveal = { interval: 200, distance: "-25%", origin: "top" }

        ScrollReveal().reveal([title, paragraph], defaultReveal)
        ScrollReveal().reveal(".service", { delay: 400, ...defaultReveal })
    }
    function articlesReveal() {
        ScrollReveal().reveal(".articles-section h2", {
            distance: "-25%",
            origin: "top"
        })
        ScrollReveal().reveal(".article", {
            delay: 200,
            interval: 200
        })
    }

    //Atribuindo os eventos após a montagem do componente
    useEffect(() => {
        ;[headerReveal(), navbarReveal(), footerReveal()]
        ;[(phonesReveal(), introReveal(), servicesReveal(), articlesReveal())]
    }, [])

    return children
}
ScrollRevealContainer.propTypes = {
    children: propTypes.node
}
