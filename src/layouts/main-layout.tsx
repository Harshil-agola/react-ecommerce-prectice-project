import React from "react"
import { Outlet } from "react-router"
import { Header } from "../components/globals"

export interface MainLayoutProps {
    children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <main>
            <Header />
            {children ?? <Outlet />}
        </main>
    )
}

export default MainLayout