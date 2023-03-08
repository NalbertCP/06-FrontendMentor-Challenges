import React from "react"
import FancyButton from "../FancyButton"

//Sessão inicial da página utilizada em App.jsx
export default function IntroSection() {
    return (
        <section className="intro-section">
            <div className="outter-container">
                <div className="inner-container">
                    <div className="text-wrapper">
                        <h1 className="main-title">Next generation digital banking</h1>
                        <p className="invisible">
                            Take your financial life online. Your Easybank account will be
                            one-stop-shop for spending, saving, budgeting, investing, and
                            much more.
                        </p>
                        <FancyButton />
                    </div>
                    <div className="mockups-wrapper">
                        <img
                            className="w-full h-full m-auto max-w-[500px] mdd:max-w-none"
                            src="../public/images/image-mockups.png"
                            alt="easybank mobile mockup"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
