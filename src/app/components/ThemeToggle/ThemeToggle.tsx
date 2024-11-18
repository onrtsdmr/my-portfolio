'use client';

import { useState, useEffect, useRef } from 'react';
import { flushSync } from 'react-dom';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const ref = useRef<HTMLButtonElement | null>(null);

    const toggleDarkMode = async (nextMode: boolean) => {
        if (
            !ref.current ||
            !document.startViewTransition ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            setIsDarkMode(nextMode);
            return;
        }

        await document.startViewTransition(() => {
            flushSync(() => {
                setIsDarkMode(nextMode);
            });
        }).ready;

        const { top, left, width, height } = ref.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
                backgroundColor: [
                    nextMode ? '#ffffff' : '#2f2f2f',
                    nextMode ? '#0a0a0a' : '#ffffff',
                ],
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        );
        localStorage.setItem('theme', nextMode ? 'dark' : 'light');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className="absolute z-50 top-5 right-5">
            <button
                ref={ref}
                onClick={() => toggleDarkMode(!isDarkMode)}
                className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center"
            >
        <span
            key={isDarkMode ? 'moon' : 'sun'}
            className={`transition-transform transform duration-500 text-xl ${
                isDarkMode ? 'animate-slide-down' : 'animate-slide-up'
            }`}
        >
          {isDarkMode ? '🌙' : '☀️'}
        </span>
            </button>
        </div>
    );
};

export default ThemeToggle;