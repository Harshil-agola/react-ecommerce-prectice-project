import { Component, type ReactNode } from "react"

interface Props {
    fallback: (error: Error) => ReactNode
    children: ReactNode
}

interface State {
    error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
    state: State = { error: null }

    static getDerivedStateFromError(error: Error) {
        return { error }
    }

    render() {
        if (this.state.error) {
            return this.props.fallback(this.state.error)
        }
        return this.props.children
    }
}