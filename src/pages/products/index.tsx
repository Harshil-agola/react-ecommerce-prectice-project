import { use } from "react"
import { apiClient } from "../../actions/api-client"
import { ProductCard } from "../../components/globals"
import "./styles.css"

const promise = apiClient.getProducts()

export default function ProductsPage() {
    const data = use(promise)

    return (
        <main className="products-page">
            <div className="products-container">
                <header className="products-header">
                    <div>
                        <h1>Products</h1>
                        <p>
                            Explore our collection of products and find
                            something perfect for you.
                        </p>
                    </div>
                    <div className="products-count">
                        <strong>{data?.total ?? 0}</strong>
                        <span>Products</span>
                    </div>
                </header>
                <section className="products-section">
                    <div className="products-toolbar">
                        <span>
                            Showing{" "}
                            <strong>{data?.products?.length ?? 0}</strong>{" "}
                            products
                        </span>
                    </div>

                    <ul className="products-grid">
                        {data?.products?.map((product) => (
                            <li key={product.id}>
                                <ProductCard data={product} />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}