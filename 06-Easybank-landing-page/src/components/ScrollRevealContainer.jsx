import propTypes from "prop-types"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

//Componente responsável por atribuir efeitos de transição
//durante eventos de scroll, para alguns elementos da página
export default function ScrollRevealContainer({ children }) {
    //Atribuindo os eventos após a montagem do componente
    useEffect(() => {
        ;[headerReveal(), navbarReveal(), footerReveal()]
        ;[(phonesReveal(), introReveal(), servicesReveal(), articlesReveal())]
    }, [])

    function headerReveal() {
        const innerContainer = document.querySelector(".header__inner")
        if (window.innerWidth > 900) {
            ScrollReveal().reveal(innerContainer, { duration: 1000 })
        } else {
            innerContainer.classList.add("header__inner--visible")
        }
    }
    function navbarReveal() {
        const navItems = document.querySelectorAll(".navbar__link-item")
        if (window.innerWidth > 900) {
            ScrollReveal().reveal(navItems, {
                delay: 400,
                interval: 200,
                distance: "-25%",
                origin: "bottom"
            })
        } else {
            Array.from(navItems).map((navItem) =>
                navItem.classList.add("navbar__link-item--visible")
            )
        }
    }
    function footerReveal() {
        const socialWrapper = document.querySelector(".footer__social-wrapper")
        const linksFooter = document.querySelector(".footer__link-list")
        const credits = document.querySelector(".footer__credits-wrapper")
        ScrollReveal().reveal([socialWrapper, linksFooter, credits], {
            interval: 200,
            distance: "-25%",
            origin: "top"
        })
    }

    function phonesReveal() {
        const phoneMockups = document.querySelector(".intro__mockups-wrapper")
        if (window.innerWidth > 900) {
            ScrollReveal().reveal(phoneMockups, { delay: 1600 })
        } else {
            phoneMockups.classList.add("intro__mockups-wrapper--visible")
        }
    }
    function introReveal() {
        const title = document.querySelector(".intro__title")
        const paragraph = document.querySelector(".intro__description")
        const fancyButton = document.querySelector(".intro__btn--cta")

        ScrollReveal().reveal([title, paragraph, fancyButton], {
            interval: 200,
            delay: window.innerWidth > 900 ? 1400 : 400,
            distance: "-25%",
            origin: "top"
        })
    }
    function servicesReveal() {
        const title = document.querySelector(".services__title")
        const paragraph = document.querySelector(".services__description")
        const defaultReveal = { interval: 200, distance: "-25%", origin: "top" }

        ScrollReveal().reveal([title, paragraph], defaultReveal)
        ScrollReveal().reveal(".service", { delay: 400, ...defaultReveal })
    }
    function articlesReveal() {
        ScrollReveal().reveal(".articles__title", {
            distance: "-25%",
            origin: "top"
        })
        ScrollReveal().reveal(".article", {
            delay: 200,
            interval: 200
        })
    }

    return children
}
ScrollRevealContainer.propTypes = {
    children: propTypes.node
}
