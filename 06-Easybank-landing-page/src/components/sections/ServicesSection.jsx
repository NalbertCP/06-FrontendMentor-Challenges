import React from "react"
import apiIcon from "/images/icon-api.svg"
import budgetingIcon from "/images/icon-budgeting.svg"
import onboardingIcon from "/images/icon-onboarding.svg"
import onlineBankingIcon from "/images/icon-online.svg"

//Sessão de serviços (segunda sessão) utilizada em App.jsx
export default function ServicesSection() {
    return (
        <section className="services-section">
            <div className="inner-container">
                <div className="mb-16 max-w-full mdd:max-w-2xl mdd:text-left text-center">
                    <h2>Why choose Easybank?</h2>
                    <p className="text-base mdd:text-lg text-[var(--grayish-blue)] invisible">
                        We leverage Open Banking to turn your bank account into your
                        financial hub. Control your finances like never before.
                    </p>
                </div>
                <div className="flex gap-8 flex-col mdd:flex-row mdd:text-left text-center">
                    <div className="service invisible">
                        <div className="service-icon">
                            <img src={onlineBankingIcon} alt="online banking icon" />
                        </div>
                        <h3>Online Banking</h3>
                        <p className="text-[var(--grayish-blue)] mdd:text-base">
                            Our modern web and mobile applications allow you to keep track
                            of your finances wherever you are in the world.
                        </p>
                    </div>
                    <div className="service invisible">
                        <div className="service-icon">
                            <img src={budgetingIcon} alt="budget icon" />
                        </div>
                        <h3>Simple Budgeting</h3>
                        <p className="text-[var(--grayish-blue)] mdd:text-base">
                            {`See exactly where your money goes each month. Receive
                            notifications when you're close to hitting your limits.`}
                        </p>
                    </div>
                    <div className="service invisible">
                        <div className="service-icon">
                            <img src={onboardingIcon} alt="onboarding icon" />
                        </div>
                        <h3>Fast Onboarding</h3>
                        <p className="text-[var(--grayish-blue)] mdd:text-base">
                            {`we don't branches. Open your account in minutes online
                            and start taking control of your finances right away.`}
                        </p>
                    </div>
                    <div className="service invisible">
                        <div className="service-icon">
                            <img src={apiIcon} alt="api icon" />
                        </div>
                        <h3>Open API</h3>
                        <p className="text-[var(--grayish-blue)] mdd:text-base">
                            Manage your savings investments, pension, and much more from
                            one account. Tracking your money has never been easier.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
