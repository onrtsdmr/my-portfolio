'use client';

import { motion, useScroll, useSpring } from "framer-motion";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);

    return (
        <div className="smooth-scroll-container">
            <motion.div style={{ scaleX }} />
            {children}
        </div>
    );
};

export default SmoothScroll;