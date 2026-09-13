import React from "react"
import { Outlet } from "react-router"

export interface AuthLayoutProps {
    children?: React.ReactNode
    title?: string
    subtitle?: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="auth-layout">
            {children ?? <Outlet />}
        </div>
    )
}

export default AuthLayout
