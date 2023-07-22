import React from "react"

import Footer from "./components/layout/footer/Footer"
import Header from "./components/layout/header/Header"
import ScrollRevealContainer from "./components/ScrollRevealContainer"
import ScrollUpButton from "./components/ScrollUpButton"

import ArticlesSection from "./components/layout/main/sections/ArticlesSection"
import IntroSection from "./components/layout/main/sections/IntroSection"
import ServicesSection from "./components/layout/main/sections/ServicesSection"

import useScroll from "./hooks/useScroll"

export default function App() {
    //useScroll detecta a porcentagem da página que ja foi "scrollada"
    //para esconder ou exibir o botão de retorno ao topo (ScrollUpButton).
    const isVisible = useScroll()

    return (
        <ScrollRevealContainer>
            <div className="app-container">
                <Header />
                <main>
                    <IntroSection />
                    <ServicesSection />
                    <ArticlesSection />
                </main>
                <Footer />
                <ScrollUpButton isVisible={isVisible} />
            </div>
        </ScrollRevealContainer>
    )
}
