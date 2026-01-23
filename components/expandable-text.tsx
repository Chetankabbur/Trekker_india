"use client"

import { useState, useRef, useEffect } from "react"

interface ExpandableTextProps {
    text: string
    lines?: number
    className?: string
}

export function ExpandableText({
    text,
    lines = 2,
    className = "text-2xl text-gray-600 font-light",
}: ExpandableTextProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOverflowing, setIsOverflowing] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current) {
                const element = containerRef.current
                const lineHeight = parseInt(window.getComputedStyle(element).lineHeight)
                const maxHeight = lineHeight * lines
                setIsOverflowing(element.scrollHeight > maxHeight)
            }
        }

        checkOverflow()
        window.addEventListener("resize", checkOverflow)
        return () => window.removeEventListener("resize", checkOverflow)
    }, [text, lines])

    return (
        <div>
            <div
                ref={containerRef}
                className={`${className} ${!isExpanded && isOverflowing ? `line-clamp-${lines}` : ""
                    }`}
                style={
                    !isExpanded && isOverflowing
                        ? {
                            display: "-webkit-box",
                            WebkitLineClamp: lines,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }
                        : {}
                }
            >
                {text}
            </div>

            {isOverflowing && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-black-600 hover:text-black-700 font-medium text-sm mt-2 transition-colors"
                >
                    {isExpanded ? "See Less" : "See More"}
                </button>
            )}
        </div>
    )
}
