'use client';

import { Link, Events } from 'react-scroll';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        // Scroll olaylarını dinle
        Events.scrollEvent.register('begin', (to) => {
            setActiveSection(to);
        });

        return () => {
            // Component unmount olduğunda event listener'ları temizle
            Events.scrollEvent.remove('begin');
        };
    }, []);

    const menuItems = [
        { id: 'about', label: 'Hakkımda' },
        { id: 'experience', label: 'Deneyim' },
        { id: 'projects', label: 'Projeler' },
        { id: 'contact', label: 'İletişim' }
    ];

    // Scroll animasyonu ekleyelim
    const navVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 3 // Loading sonrası
            }
        }
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="fixed top-0 w-full z-40 backdrop-blur-sm"
        >
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-center items-center gap-4 md:gap-8 py-4 px-2 md:px-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.id}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={`relative px-1 md:px-2 py-1 text-xs md:text-sm font-medium cursor-pointer transition-colors duration-300
                                ${activeSection === item.id 
                                    ? 'text-purple-600 dark:text-orange-500' 
                                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-orange-500'
                                }`}
                            activeClass="active"
                            onSetActive={() => setActiveSection(item.id)}
                        >
                            {item.label}
                            <span 
                                className={`absolute left-0 bottom-0 w-full h-0.5 transform origin-left transition-transform duration-300 ease-out bg-purple-600 dark:bg-orange-500
                                    ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'}`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;