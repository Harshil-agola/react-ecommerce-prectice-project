import React from "react"
import { Skeleton } from "../skeleton"
import "./productCard.css"

export interface ProductCardSkeletonProps {
    className?: string
}

export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({
    className = "",
}) => {
    return (
        <article
            className={`product-card product-card--skeleton ${className}`}
            aria-busy="true"
            aria-label="Loading product..."
        >
            {/* Image Skeleton */}
            <div className="product-card__image-wrapper">
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: 0, left: 0 }}
                />
            </div>

            {/* Content Skeleton */}
            <div className="product-card__content">
                {/* Category */}
                <Skeleton
                    variant="text"
                    width={70}
                    height={12}
                    style={{ marginBottom: 8 }}
                />

                {/* Title */}
                <Skeleton
                    variant="text"
                    width="85%"
                    height={22}
                    style={{ marginBottom: 12 }}
                />

                {/* Description */}
                <div style={{ marginBottom: 14 }}>
                    <Skeleton variant="text" width="100%" height={13} />
                    <Skeleton variant="text" width="75%" height={13} />
                </div>

                {/* Rating */}
                <div className="product-card__rating">
                    <Skeleton variant="rounded" width={56} height={18} />
                    <Skeleton
                        variant="rounded"
                        width={72}
                        height={16}
                        style={{ marginLeft: "auto" }}
                    />
                </div>

                {/* Pricing */}
                <div className="product-card__pricing">
                    <Skeleton variant="rounded" width={84} height={28} />
                    <Skeleton variant="rounded" width={52} height={18} />
                </div>

                {/* Availability info */}
                <div className="product-card__info">
                    <Skeleton variant="rounded" width={68} height={18} />
                    <Skeleton variant="text" width={80} height={14} />
                </div>

                {/* Shipping & Warranty */}
                <Skeleton
                    variant="text"
                    width="65%"
                    height={12}
                    style={{ marginTop: 10 }}
                />
                <Skeleton
                    variant="text"
                    width="50%"
                    height={12}
                    style={{ marginTop: 6 }}
                />

                {/* Action Button */}
                <Skeleton
                    variant="rounded"
                    width="100%"
                    height={40}
                    borderRadius={8}
                    style={{ marginTop: 16 }}
                />
            </div>
        </article>
    )
}
