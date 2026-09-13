import { use, useState, Suspense } from "react"
import { Navigate, Outlet } from "react-router"
import { apiClient } from "../actions/api-client"
import { ErrorBoundary } from "../components/globals/error-boundary"

function AuthCheck({ userPromise }: { userPromise: ReturnType<typeof apiClient.getCurrentLoggedInUser> }) {
    use(userPromise)
    return <Outlet />
}

export function RequireAuth() {
    const [userPromise] = useState(() => apiClient.getCurrentLoggedInUser())

    return (
        <ErrorBoundary fallback={() => <Navigate to="/sign-in" replace />}>
            <Suspense fallback={<p>Loading...</p>}>
                <AuthCheck userPromise={userPromise} />
            </Suspense>
        </ErrorBoundary>
    )
}