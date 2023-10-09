import propTypes from "prop-types"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

//Componente responsável por atribuir efeitos de transição
//durante eventos de scroll, para alguns elementos da página
export default function ScrollRevealContainer({ children }) {
    //Atribuindo os eventos após a montagem do componente
    useEffect(() => {
        ;[headerReveal(), navbarReveal(), footerReveal()]
        ;[phonesReveal(), introReveal(), servicesReveal(), articlesReveal()]
    }, [])

    function headerReveal() {
        const innerContainer = document.querySelector(".header__inner")
        if (window.innerWidth > 900) {
            ScrollReveal().reveal(innerContainer, {
                duration: 1000,
                easing: "ease-in-out"
            })
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
                origin: "bottom",
                duration: 500,
                easing: "ease-in-out"
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
            distance: "-50%",
            origin: "top",
            duration: 750,
            easing: "ease-in-out"
        })
    }

    function phonesReveal() {
        const phoneMockups = document.querySelector(".intro__mockups-wrapper")
        ScrollReveal().reveal(phoneMockups, {
            delay: window.innerWidth > 900 ? 2500 : 0,
            duration: 750,
            easing: "ease-in-out"
        })
    }
    function introReveal() {
        const title = document.querySelector(".intro__title")
        const paragraph = document.querySelector(".intro__description")
        const fancyButton = document.querySelector(".intro__btn--cta")

        ScrollReveal().reveal([title, paragraph, fancyButton], {
            interval: 200,
            delay: window.innerWidth > 900 ? 1700 : 500,
            distance: "-50%",
            origin: "top",
            duration: 500,
            easing: "ease-in-out"
        })
    }
    function servicesReveal() {
        const title = document.querySelector(".services__title")
        const paragraph = document.querySelector(".services__description")
        const defaultRevelConfigs = {
            interval: 200,
            distance: "-50%",
            origin: "top",
            duration: 750,
            easing: "ease-in-out"
        }

        ScrollReveal().reveal([title, paragraph], defaultRevelConfigs)
        ScrollReveal().reveal(".service", defaultRevelConfigs)
    }
    function articlesReveal() {
        const defaultRevelConfigs = { duration: 750, easing: "ease-in-out" }
        ScrollReveal().reveal(".articles__title", {
            distance: "-50%",
            origin: "top",
            ...defaultRevelConfigs
        })
        ScrollReveal().reveal(".article", {
            delay: 200,
            interval: 200,
            ...defaultRevelConfigs
        })
    }

    return children
}
ScrollRevealContainer.propTypes = {
    children: propTypes.node
}
