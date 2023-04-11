import { useEffect, useState } from "react"

//Hook utilizando em App.jsx para exibir ou esconder o botão
//de retorno ao topo da página.
export default function useScroll() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(scrollObserver, [])

    function scrollObserver() {
        //Retornando ao topo da página em caso de recarregamento.
        history.scrollRestoration = "manual"

        //Iniciando o observador e atribuindo o elemento que será observado.
        const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 })
        observer.observe(document.querySelector(".service:first-child"))

        return () => observer.disconnect()
    }

    function observerCallback(entry) {
        const isIntersecting = entry[0].isIntersecting
        const positiveClientRectTop = entry[0].boundingClientRect.y > 0
        if (isIntersecting && positiveClientRectTop) setIsVisible(true)
        if (!isIntersecting && positiveClientRectTop) setIsVisible(false)
    }

    return { isVisible }
}
