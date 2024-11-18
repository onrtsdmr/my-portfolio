'use client';

import { useScroll, useTransform, motion } from "framer-motion";

const ParallaxSection = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <motion.div
            style={{ y }}
            className="parallax-element"
        >
            {/* İçerik */}
        </motion.div>
    );
};

export default ParallaxSection;