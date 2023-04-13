import React from "react"
import Article from "../Article"
import confetti from "/images/image-confetti.jpg"
import currency from "/images/image-currency.jpg"
import airplane from "/images/image-plane.jpg"
import restaurant from "/images/image-restaurant.jpg"

//Sessão de artigos (terceira sessão) utilizada em App.jsx
export default function ArticlesSection() {
    return (
        <section className="articles">
            <div className="inner-container articles__inner-container">
                <h2 className="articles__title">Latest Articles</h2>
                <div className="articles__articles-wrapper">
                    <Article
                        img={currency}
                        imgAlt="some euro paper currency"
                        author="Claire Robinson"
                        title="Receive money in any currency with no fees"
                        description="The world is getting smaller and we're
                            becoming more mobile. So why should you be forced to
                            only receive money in a single..."
                    />
                    <Article
                        img={restaurant}
                        imgAlt="a restaurant with some menu dishes"
                        author="Wilson Hutton"
                        title="Treat yourself without worrying about money"
                        description="Our simple budgeting feature allows you
                            to separate out your spending and set realistic limits
                            each month. That means you..."
                    />
                    <Article
                        img={airplane}
                        imgAlt="an airplane flying with focus to its right wing"
                        author="Wilson Hutton"
                        title="Take your Easybank card wherever you go"
                        description="We want you to enjoy travels. This is why we
                            don't change any fees purchases while you're abroad.
                            We'll even show you..."
                    />
                    <Article
                        img={confetti}
                        imgAlt="colorful confetti"
                        author="Claire Robinson"
                        title="Our invite-only Beta accounts are now live!"
                        description="After a lot of hard work by the whole team,
                            we're excited to launch our closed beta. It's
                            east to request an invite through the site..."
                    />
                </div>
            </div>
        </section>
    )
}
