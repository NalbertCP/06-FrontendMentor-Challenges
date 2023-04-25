import React from "react"

import FancyButton from "../../FancyButton"
import FacebookIcon from "../../icons/FacebookIcon"
import InstagramIcon from "../../icons/InstagramIcon"
import EasyBankLogo from "../../icons/LogoIcon"
import PinterestIcon from "../../icons/PinterestIcon"
import TwitterIcon from "../../icons/TwitterIcon"
import YouTubeIcon from "../../icons/YoutubeIcon"
import Attributions from "./Attributions"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="inner-container footer__inner-container">
                <div className="footer__social-wrapper">
                    <div>
                        <EasyBankLogo fillColor="#ffffff" />
                    </div>
                    <div className="footer__social-links">
                        <a className="group/social" href="#">
                            <FacebookIcon className="footer__social-icon" />
                        </a>
                        <a href="#" className="group/social">
                            <YouTubeIcon className="footer__social-icon" />
                        </a>
                        <a href="#" className="group/social">
                            <TwitterIcon className="footer__social-icon" />
                        </a>
                        <a href="#" className="group/social">
                            <PinterestIcon className="footer__social-icon" />
                        </a>
                        <a href="#" className="group/social">
                            <InstagramIcon className="footer__social-icon" />
                        </a>
                    </div>
                </div>
                <ul className="footer__link-list">
                    <li>
                        <a className="footer__link" href="#">
                            About us
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Careers
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Support
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
                <div className="footer__credits-wrapper">
                    <FancyButton className="btn btn--cta footer__btn--cta" />
                    <span className="block text-[var(--grayish-blue)] text-sm">
                        © Easybank. All Rights Reserved
                    </span>
                    <Attributions />
                </div>
            </div>
        </footer>
    )
}
