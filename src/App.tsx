import { createBrowserRouter, RouterProvider } from "react-router"
import { Suspense } from "react"
import { HomePage, ProductsPage, ProductsPageSkeleton, AuthPage } from "./pages"
import { MainLayout, AuthLayout } from "./layouts"
import { RequireAuth } from "./layouts/require-auth"

const router = createBrowserRouter([
    {
        element: <RequireAuth />,
        children: [
            {
                element: (
                    <Suspense fallback={null}>
                        <MainLayout />
                    </Suspense>
                ),
                children: [
                    {
                        path: "/",
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <HomePage />
                            </Suspense>
                        ),
                    },
                    {
                        path: "/products",
                        element: (
                            <Suspense fallback={<ProductsPageSkeleton />}>
                                <ProductsPage />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/sign-in",
                element: <AuthPage />,
            },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router} />
}