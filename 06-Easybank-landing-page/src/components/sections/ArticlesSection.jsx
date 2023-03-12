import React from "react"
import confetti from "/images/image-confetti.jpg"
import currency from "/images/image-currency.jpg"
import airplane from "/images/image-plane.jpg"
import restaurant from "/images/image-restaurant.jpg"

//Sessão de artigos (terceira sessão) utilizada em App.jsx
export default function ArticlesSection() {
    return (
        <section className="articles-section">
            <div className="inner-container">
                <div>
                    <h2>Latest Articles</h2>
                    <div className="flex gap-8 flex-col mdd:flex-row">
                        <article className="article">
                            <div className="h-[12.5rem]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={currency}
                                    alt="some euro paper currency"
                                />
                            </div>
                            <div className="px-6 py-7">
                                <p className="text-[0.65rem] mdd:text-xs mb-2">
                                    By Claire Robinson
                                </p>
                                <a className="article-link" href="#">
                                    <h3>Receive money in any currency with no fees</h3>
                                </a>
                                <p className="text-[0.8rem]">
                                    {`The world is getting smaller and we're becoming more
                                    mobile. So why should you be forced to only receive money
                                    in a single...`}
                                </p>
                            </div>
                        </article>
                        <article className="article">
                            <div className="h-[12.5rem]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={restaurant}
                                    alt="a restaurant with some menu dishes "
                                />
                            </div>
                            <div className="p-6 py-7">
                                <p className="text-[0.65rem] mdd:text-xs mb-2">
                                    By Wilson Hutton
                                </p>
                                <a className="article-link" href="#">
                                    <h3>Treat yourself without worrying about money</h3>
                                </a>
                                <p className="text-[0.8rem]">
                                    Our simple budgeting feature allows you to separate
                                    out your spending and set realistic limits each month.
                                    That means you...
                                </p>
                            </div>
                        </article>
                        <article className="article">
                            <div className="h-[12.5rem]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={airplane}
                                    alt="a plane flying with focus to its right wing"
                                />
                            </div>
                            <div className="p-6 py-7">
                                <p className="text-[0.65rem] mdd:text-xs mb-2">
                                    By Wilson Hutton
                                </p>
                                <a className="article-link" href="#">
                                    <h3>Take your Easybank card wherever you go</h3>
                                </a>
                                <p className="text-[0.8rem]">
                                    {`We want you to enjoy travels. This is why we
                                    don't change any fees purchases while you're abroad.
                                    We'll even show you...`}
                                </p>
                            </div>
                        </article>
                        <article className="article">
                            <div className="h-[12.5rem]">
                                <img
                                    className="w-full h-full object-cover"
                                    src={confetti}
                                    alt="colorful confetti"
                                />
                            </div>
                            <div className="p-6 py-7">
                                <p className="text-[0.65rem] mdd:text-xs mb-2">
                                    By Claire Robinson
                                </p>
                                <a className="article-link" href="#">
                                    <h3>Our invite-only Beta accounts are now live!</h3>
                                </a>
                                <p className="text-[0.8rem]">
                                    {`After a lot of hard work by the whole team,
                                    we're excited to launch our closed beta. It's
                                    east to request an invite through the site...`}
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
