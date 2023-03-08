import { useEffect, useState } from "react"

//Hook utilizado para controlar a funcionalidade do menu mobile
//em Navbar.jsx.
export default function useMenu() {
    const displayBlock = "block"
    const displayNone = "hidden"
    const [menuOpen, setMenuOpen] = useState(false)
    const [navbarStyle, setNavStyle] = useState(
        "bg-gradient-to-b from-[var(--overlay-dark-blue)] to-white/10 w-screen h-screen -translate-x-2/4 left-1/2 absolute top-full p-6 hidden mdd:-translate-x-0 mdd:left-0 mdd:relative mdd:top-0 mdd:h-full mdd:w-auto mdd:p-0 mdd:from-transparent mdd:to-transparent mdd:block"
    )

    useEffect(changeMenuDisplay, [menuOpen])

    function changeMenuState() {
        if (window.innerWidth <= 900) setMenuOpen(menuOpen ? false : true)
    }

    //Aplicando display block ou none ao menu somente após a animação
    //de abertura ou fechamento terminar.
    function changeMenuDisplay() {
        if (!menuOpen) {
            const timer = setTimeout(() => {
                setNavStyle(replaceExactString(navbarStyle, "block", displayNone))
            }, 200)
            return () => clearTimeout(timer)
        } else {
            setNavStyle(replaceExactString(navbarStyle, "hidden", displayBlock))
        }
    }

    //Localizando e alterando a string exata passada como parâmetro da função.
    function replaceExactString(string, searchValue, replaceValue) {
        const arrayOfStrings = string.split(" ")
        const arrayModified = arrayOfStrings.map((value) => {
            return value === searchValue ? replaceValue : value
        })
        return arrayModified.join(" ")
    }

    return { menuOpen, navbarStyle, changeMenuState }
}
