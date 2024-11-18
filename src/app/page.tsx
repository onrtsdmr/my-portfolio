'use client';

import { useState, useEffect } from 'react';
import Loading from './components/Loading/Loading';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { motion, useScroll } from "framer-motion";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <Loading />
            <ThemeToggle />
            <Navbar />
            <Banner />
            <Timeline />
            <Projects />
            <Contact />
            <Footer />
            <ScrollProgress />
        </>
    );
}

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-purple-600 dark:bg-orange-500 transform origin-left z-50"
            style={{ scaleX: scrollYProgress }}
        />
    );
};