import React from "react"
import Service from "../Service"
import apiIcon from "/images/icon-api.svg"
import budgetingIcon from "/images/icon-budgeting.svg"
import onboardingIcon from "/images/icon-onboarding.svg"
import onlineBankingIcon from "/images/icon-online.svg"

//Sessão de serviços (segunda sessão) utilizada em App.jsx
export default function ServicesSection() {
    return (
        <section className="services">
            <div className="inner-container services__inner-container">
                <div className="mb-16 max-w-full mdd:max-w-2xl mdd:text-left text-center">
                    <h2 className="services__title">Why choose Easybank?</h2>
                    <p className="services__description">
                        We leverage Open Banking to turn your bank account into your
                        financial hub. Control your finances like never before.
                    </p>
                </div>
                <div className="services__services-wrapper ">
                    <Service
                        icon={onlineBankingIcon}
                        iconAlt="online banking icon"
                        title="Online Banking"
                        description="Our modern web and mobile applications allow you to keep track
                            of your finances wherever you are in the world."
                    />
                    <Service
                        icon={budgetingIcon}
                        iconAlt="budget icon"
                        title="Simple Budgeting"
                        description="See exactly where your money goes each month. Receive
                            notifications when you're close to hitting your limits."
                    />
                    <Service
                        icon={onboardingIcon}
                        iconAlt="onboarding icon"
                        title="Fast Onboarding"
                        description="We don't branches. Open your account in minutes online
                            and start taking control of your finances right away."
                    />
                    <Service
                        icon={apiIcon}
                        iconAlt="api icon"
                        title="Open API"
                        description="Manage your savings investments, pension, and much more from
                            one account. Tracking your money has never been easier."
                    />
                </div>
            </div>
        </section>
    )
}
