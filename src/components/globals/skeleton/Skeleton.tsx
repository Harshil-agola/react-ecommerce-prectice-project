import React from "react"
import "./skeleton.css"

export type SkeletonVariant = "text" | "rectangular" | "rounded" | "circular"
export type SkeletonAnimation = "shimmer" | "pulse" | "none"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: SkeletonVariant
    animation?: SkeletonAnimation
    width?: string | number
    height?: string | number
    borderRadius?: string | number
    count?: number
    className?: string
    style?: React.CSSProperties
    ariaLabel?: string
}

const formatSize = (value?: string | number): string | undefined => {
    if (value === undefined) return undefined
    return typeof value === "number" ? `${value}px` : value
}

export const Skeleton: React.FC<SkeletonProps> = ({
    variant = "text",
    animation = "shimmer",
    width,
    height,
    borderRadius,
    count = 1,
    className = "",
    style = {},
    ariaLabel = "Loading...",
    ...rest
}) => {
    const customStyle: React.CSSProperties = {
        ...style,
        ...(width !== undefined ? { width: formatSize(width) } : {}),
        ...(height !== undefined ? { height: formatSize(height) } : {}),
        ...(borderRadius !== undefined ? { borderRadius: formatSize(borderRadius) } : {}),
    }

    const classes = [
        "skeleton",
        `skeleton--${variant}`,
        animation !== "none" ? `skeleton--${animation}` : "",
        className,
    ]
        .filter(Boolean)
        .join(" ")

    if (count > 1) {
        return (
            <div
                role="status"
                aria-live="polite"
                aria-label={ariaLabel}
                className="skeleton-group"
            >
                {Array.from({ length: count }).map((_, index) => {
                    // For multi-line text, taper the last line slightly for a natural text paragraph look
                    const isLast = index === count - 1
                    const lineStyle: React.CSSProperties = {
                        ...customStyle,
                        ...(variant === "text" && isLast && !width
                            ? { width: "70%" }
                            : {}),
                    }

                    return (
                        <span
                            key={index}
                            className={classes}
                            style={lineStyle}
                            aria-hidden="true"
                            {...(rest as React.HTMLAttributes<HTMLSpanElement>)}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <span
            role="status"
            aria-live="polite"
            aria-label={ariaLabel}
            className={classes}
            style={customStyle}
            aria-hidden="true"
            {...(rest as React.HTMLAttributes<HTMLSpanElement>)}
        />
    )
}
