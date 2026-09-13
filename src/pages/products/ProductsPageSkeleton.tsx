import React from "react"
import { ProductCardSkeleton, Skeleton } from "../../components/globals"
import "./styles.css"

export interface ProductsPageSkeletonProps {
    count?: number
}

export const ProductsPageSkeleton: React.FC<ProductsPageSkeletonProps> = ({
    count = 8,
}) => {
    return (
        <main
            className="products-page"
            aria-busy="true"
            aria-label="Loading products page..."
        >
            <div className="products-container">
                {/* Header Skeleton */}
                <header className="products-header">
                    <div style={{ width: "100%", maxWidth: 600 }}>

                        <Skeleton
                            variant="rounded"
                            width={240}
                            height={48}
                            style={{ marginBottom: 16 }}
                        />
                        <Skeleton
                            variant="text"
                            width="90%"
                            height={16}
                            style={{ marginBottom: 6 }}
                        />
                    </div>

                    <div className="products-count" style={{ borderColor: "#f3f4f6" }}>
                        <Skeleton variant="rounded" width={52} height={32} />
                        <Skeleton
                            variant="text"
                            width={64}
                            height={12}
                            style={{ marginTop: 8 }}
                        />
                    </div>
                </header>

                {/* Section Skeleton */}
                <section className="products-section">
                    <div className="products-toolbar">
                        <Skeleton variant="rounded" width={150} height={20} />
                    </div>

                    <ul className="products-grid">
                        {Array.from({ length: count }).map((_, index) => (
                            <li key={index}>
                                <ProductCardSkeleton />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}
