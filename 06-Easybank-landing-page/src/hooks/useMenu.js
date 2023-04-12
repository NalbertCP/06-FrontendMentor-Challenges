import { useState } from "react"

//Hook utilizado para controlar a funcionalidade do menu mobile
//em Navbar.jsx.
export default function useMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    function changeMenuState() {
        setMenuOpen(!menuOpen)
    }

    return { menuOpen, changeMenuState }
}
