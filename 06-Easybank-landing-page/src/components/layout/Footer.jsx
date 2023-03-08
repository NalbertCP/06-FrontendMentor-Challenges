// import React from "react"
import React from "react"

import Attributions from "../Attributions"
import FancyButton from "../FancyButton"
import FacebookIcon from "../icons/FacebookIcon"
import InstagramIcon from "../icons/InstagramIcon"
import EasyBankLogo from "../icons/LogoIcon"
import PinterestIcon from "../icons/PinterestIcon"
import TwitterIcon from "../icons/TwitterIcon"
import YouTubeIcon from "../icons/YoutubeIcon"

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--dark-blue)] px-8 py-10 mdd:py-12 overflow-hidden">
            <div className="inner-container">
                <div className="social-wrapper">
                    <div>
                        <EasyBankLogo fillColor="#ffffff" />
                    </div>
                    <div className="social-links">
                        <a className="group/social" href="#">
                            <i className="cursor-pointer">
                                <FacebookIcon className="social-icon" />
                            </i>
                        </a>
                        <a href="#" className="group/social">
                            <i>
                                <YouTubeIcon className="social-icon" />
                            </i>
                        </a>
                        <a href="#" className="group/social">
                            <i>
                                <TwitterIcon className="social-icon" />
                            </i>
                        </a>
                        <a href="#" className="group/social">
                            <i>
                                <PinterestIcon className="social-icon" />
                            </i>
                        </a>
                        <a href="#" className="group/social">
                            <i>
                                <InstagramIcon className="social-icon" />
                            </i>
                        </a>
                    </div>
                </div>
                <ul className="link-list">
                    <li>
                        <a className="footer-link" href="#">
                            About us
                        </a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">
                            Careers
                        </a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">
                            Support
                        </a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
                <div className="credits-wrapper">
                    <FancyButton />
                    <span className="block text-[var(--grayish-blue)] text-sm">
                        © Easybank. All Rights Reserved
                    </span>
                    <Attributions />
                </div>
            </div>
        </footer>
    )
}
