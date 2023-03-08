import React from "react"

import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import ScrollRevealContainer from "./components/ScrollRevealContainer"
import ScrollUpButton from "./components/ScrollUpButton"
import ArticlesSection from "./components/sections/ArticlesSection"
import IntroSection from "./components/sections/IntroSection"
import ServicesSection from "./components/sections/ServicesSection"
import useScroll from "./hooks/useScroll"

export default function App() {
    //useScroll detecta a porcentagem da página que ja foi "scrollada"
    //para esconder ou exibir o botão de retorno ao topo (ScrollUpButton).
    const { isVisible } = useScroll()

    return (
        <ScrollRevealContainer>
            <Header />
            <main>
                <IntroSection />
                <ServicesSection />
                <ArticlesSection />
                <Footer />
                <ScrollUpButton isVisible={isVisible} />
            </main>
        </ScrollRevealContainer>
    )
}
