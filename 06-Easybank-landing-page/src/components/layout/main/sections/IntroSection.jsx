import React from "react"
import FancyButton from "../../../FancyButton"
import phoneMockups from "/images/image-mockups.png"

//Sessão inicial da página utilizada em App.jsx
export default function IntroSection() {
    return (
        <section className="intro">
            <div className="intro__inner-container">
                <div className="inner-container intro__content-wrapper">
                    <div className="intro__text-wrapper">
                        <h1 className="intro__title">Next generation digital banking</h1>
                        <p className="intro__description">
                            Take your financial life online. Your Easybank account will be
                            one-stop-shop for spending, saving, budgeting, investing, and
                            much more.
                        </p>
                        <FancyButton className="btn btn--cta intro__btn--cta" />
                    </div>
                    <div className="intro__mockups-wrapper">
                        <img
                            className="w-full h-full m-auto max-w-[500px] mdd:max-w-none"
                            src={phoneMockups}
                            alt="easybank mobile mockup"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
