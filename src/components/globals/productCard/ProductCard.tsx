import type { Product } from "../../../lib/types"
import "./productCard.css"

export interface ProductCardProps {
    data: Product
}

export const ProductCard = ({ data }: ProductCardProps) => {
    const {
        availabilityStatus,
        category,
        description,
        discountPercentage,
        id,
        images,
        minimumOrderQuantity,
        price,
        rating,
        stock,
        thumbnail,
        title,
        warrantyInformation,
        shippingInformation,
    } = data

    const discountedPrice =
        price - (price * discountPercentage) / 100

    return (
        <article className="product-card" id={`product-card-${id}`}>
            {/* Image */}
            <div className="product-card__image-wrapper">
                <img
                    className="product-card__image"
                    src={thumbnail || images?.[0]}
                    alt={title}
                />

                {discountPercentage > 0 && (
                    <span className="product-card__discount">
                        Save {discountPercentage.toFixed(0)}%
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="product-card__content">
                <span className="product-card__category">
                    {category}
                </span>

                <h2 className="product-card__title">
                    {title}
                </h2>

                <p className="product-card__description">
                    {description}
                </p>

                {/* Rating */}
                <div className="product-card__rating">
                    {Array.from({ length: Number(rating.toFixed(1)) as number }).map((_, i) => <span key={i}>★</span>)}
                    <strong>{rating.toFixed(1)}</strong>
                    <span className="product-card__stock">
                        {stock > 0 ? `${stock} in stock` : "Out of stock"}
                    </span>
                </div>

                {/* Price */}
                <div className="product-card__pricing">
                    <span className="product-card__price">
                        ${discountedPrice.toFixed(2)}
                    </span>

                    {discountPercentage > 0 && (
                        <span className="product-card__original-price">
                            ${price.toFixed(2)}
                        </span>
                    )}
                </div>

                <div className="product-card__info">
                    <span
                        className={
                            availabilityStatus === "In Stock"
                                ? "product-card__available"
                                : "product-card__unavailable"
                        }
                    >
                        {availabilityStatus}
                    </span>

                    <span>
                        Min. order: {minimumOrderQuantity}
                    </span>
                </div>

                {shippingInformation && (
                    <p className="product-card__shipping">
                        {shippingInformation}
                    </p>
                )}

                {warrantyInformation && (
                    <p className="product-card__warranty">
                        {warrantyInformation}
                    </p>
                )}

                <div>
                    <button className="product-card__button">
                        Add to cart
                    </button>
                    <button className="product-card__button">
                        View Product
                    </button>
                </div>
            </div>
        </article>
    )
}