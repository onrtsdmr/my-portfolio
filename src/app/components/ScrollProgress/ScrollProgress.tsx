'use client';

import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-purple-600 dark:bg-orange-500 transform origin-left z-50"
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ScrollProgress;