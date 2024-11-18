'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const clickableElements = ['a', 'button', 'input', '[role="button"]', '.clickable'];
            if (clickableElements.some(element => target.closest(element))) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 12,  
            y: mousePosition.y - 12,
            scale: 1
        },
        hover: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: 1.5
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 1
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 1.2
        }
    };

    return (
        <>
            <motion.div
                className="cursor-dot"
                animate={isHovering ? "hover" : "default"}
                variants={dotVariants}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 300,
                    mass: 0.1
                }}
            />
            <motion.div
                className="cursor-ring"
                animate={isHovering ? "hover" : "default"}
                variants={variants}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 300,
                    mass: 0.5
                }}
            />
        </>
    );
};

export default CustomCursor;