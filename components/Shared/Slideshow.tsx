"use client";

import React, { useState, useEffect, useCallback, ReactNode } from "react";

interface SlideShowProps {
    children: ReactNode[];
    autoStart: boolean;
    delay: number;
}

export default function SlideShow({ children, autoStart, delay }: SlideShowProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((currentSlide + 1) % children.length);
    }, [currentSlide, children.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((currentSlide - 1 + children.length) % children.length);
    }, [currentSlide, children.length]);

    useEffect(() => {
        if (autoStart) {
            const timer = setInterval(nextSlide, delay);
            return () => clearInterval(timer);
        }
    }, [autoStart, delay, nextSlide]);

    return (
        <div>
            <div>{children[currentSlide]}</div>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
            <div>
                {children.map((child, index) => (
                    <span key={index} style={{ color: index === currentSlide ? "red" : "gray" }}>
                        •
                    </span>
                ))}
            </div>
        </div>
    );
}
