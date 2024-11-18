'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from '@/app/assets/images/profile_pic.png';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 bg-white dark:bg-black"
                >
                    {/* Ana resim animasyonu */}
                    <div className="fixed inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ 
                                scale: 0,
                                opacity: 0
                            }}
                            animate={{ 
                                scale: 1,
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.5
                            }}
                        >
                            <motion.div
                                animate={{ 
                                    x: "calc(50vw - 192px - 1rem)", // Sağa doğru hareket (2rem padding + 1rem boşluk için)
                                    y: 0
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 1, // İlk animasyondan sonra başla
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src={profilePic}
                                    alt="Onur TAŞDEMİR"
                                    width={384}
                                    height={384}
                                    className="rounded-full shadow-lg"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Loading Bar */}
                    <div className="fixed bottom-8 left-0 w-full">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5 }}
                            className="h-1 mx-auto w-48 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-orange-400 dark:to-orange-600 rounded-full"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-center mt-4 text-gray-600 dark:text-gray-400"
                        >
                            Yükleniyor...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loading;
