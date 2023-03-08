import { useEffect, useState } from "react"

//Hook utilizando em App.jsx para exibir ou esconder o botão
//de retorno ao topo da página.
export default function useScroll() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(scrollObserver, [])

    function scrollObserver() {
        //Retornando ao topo após o recarregamento da página.
        history.scrollRestoration = "manual"

        const observer = new IntersectionObserver(
            (entry) => {
                const isIntersecting = entry[0].isIntersecting
                const positiveClientRectTop = entry[0].boundingClientRect.y > 0
                if (isIntersecting && positiveClientRectTop) setIsVisible(true)
                if (!isIntersecting && positiveClientRectTop) setIsVisible(false)
            },
            { threshold: 0.5 }
        )
        observer.observe(document.querySelector(".service:first-child"))
        return () => observer.disconnect()
    }

    return { isVisible }
}
