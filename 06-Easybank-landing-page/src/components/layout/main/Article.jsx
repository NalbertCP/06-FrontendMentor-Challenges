import propTypes from "prop-types"
import React from "react"

export default function Article({
    img,
    imgAlt,
    imgWidth,
    imgHeight,
    title,
    author,
    description
}) {
    return (
        <article className="article">
            <div className="article__img-container">
                <img
                    loading="lazy"
                    width={imgWidth}
                    height={imgHeight}
                    className="w-full h-full object-cover"
                    src={img}
                    alt={imgAlt}
                />
            </div>
            <div className="article__content-wrapper">
                <p className="article__author">By {author}</p>
                <a className="article__link" href="#">
                    <h3>{title}</h3>
                </a>
                <p className="article__description">{description}</p>
            </div>
        </article>
    )
}
Article.propTypes = {
    img: propTypes.node,
    imgAlt: propTypes.string,
    imgWidth: propTypes.number,
    imgHeight: propTypes.number,
    title: propTypes.string,
    author: propTypes.string,
    description: propTypes.string
}
