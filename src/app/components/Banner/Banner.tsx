'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import { FaMouse } from 'react-icons/fa';
import profilePic from '@/app/assets/images/profile_pic.png';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [text, setText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const fullText = "Onur TAŞDEMİR";

    useEffect(() => {
        const startDelay = setTimeout(() => {
            setStartTyping(true);
        }, 2500);

        return () => clearTimeout(startDelay);
    }, []);

    useEffect(() => {
        if (!startTyping) return;

        let currentIndex = 0;
        setText("");

        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setIsTypingComplete(true);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [startTyping]);

    return (
        <section id="about" className="min-h-screen flex items-center relative bg-white dark:bg-black py-20">
            <div className="absolute right-[-50%] w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.3),transparent_70%)] hidden md:block" />
            <div className="absolute bottom-[-50%] left-[-10%] -translate-x-1/2 w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.3),transparent_70%)] hidden md:block" />


            <div className="max-w-screen mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6 px-4 md:px-12 text-center md:text-left"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Merhaba, Ben{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-purple-800 dark:from-orange-400 dark:to-orange-600 text-transparent bg-clip-text inline-flex">
                            {text}
                            <span className={`w-[2px] -mb-1 inline-block animate-blink ml-1 ${isTypingComplete ? 'bg-purple-600 dark:bg-orange-500' : 'bg-gray-900 dark:bg-white'
                                }`}>
                                &nbsp;
                            </span>
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                        Full Stack Developer
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        5 yıllık deneyimimle web ve mobil uygulama geliştirme konusunda uzmanlaşmış bir geliştiriciyim.
                        Modern teknolojileri kullanarak kullanıcı dostu ve ölçeklenebilir çözümler üretiyorum.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 dark:from-orange-400 dark:to-orange-600 text-white font-medium hover:from-purple-700 hover:to-purple-900 dark:hover:from-orange-500 dark:hover:to-orange-700 transition-all duration-300 cursor-pointer"
                        >
                            İletişime Geç
                        </Link>
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-purple-600 dark:border-orange-500 text-purple-600 dark:text-orange-500 font-medium hover:bg-purple-50 dark:hover:bg-orange-950/20 transition-all duration-300"
                        >
                            CV'mi İndir
                        </a>
                    </div>
                </motion.div>
                <motion.div className="relative w-full flex justify-center md:justify-end items-center">
                    <div className="relative w-[280px] h-[280px] md:w-[384px] md:h-[384px]">
                        <Image
                            src={profilePic}
                            alt="Onur TAŞDEMİR"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-gray-400 hover:text-purple-600 dark:hover:text-orange-500 transition-colors duration-300"
                >
                    <FaMouse className="w-6 h-6 animate-bounce" />
                </Link>
            </motion.div>
        </section>
    );
};

export default Banner;