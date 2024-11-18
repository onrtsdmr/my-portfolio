'use client';

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/yourusername',
            icon: <FaGithub className="w-6 h-6" />
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername',
            icon: <FaLinkedin className="w-6 h-6" />
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/yourusername',
            icon: <FaTwitter className="w-6 h-6" />
        }
    ];

    const footerLinks = [
        { name: 'Hakkımda', id: 'about' },
        { name: 'Projeler', id: 'projects' },
        { name: 'Deneyim', id: 'experience' },
        { name: 'İletişim', id: 'contact' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
            <div className="absolute left-[-30%] w-1/2 h-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.3),transparent_70%)] hidden md:block" />
            <motion.div 
                className="max-w-6xl mx-auto px-4 py-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-orange-400 dark:to-orange-600 text-transparent bg-clip-text">
                            Onur TAŞDEMİR
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Full Stack Developer olarak web ve mobil uygulama geliştirme konusunda deneyimli.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                            Hızlı Linkler
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <motion.li 
                                    key={link.name}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={link.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-orange-500 transition-colors duration-300 cursor-pointer flex items-center gap-2"
                                    >
                                        <FaCode className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                            Sosyal Medya
                        </h3>
                        <div className="flex space-x-6">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-orange-500 transition-colors duration-300 transform hover:-translate-y-1"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="mt-8 md:mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                            © {currentYear} Onur TAŞDEMİR. Tüm hakları saklıdır.
                        </p>
                        <motion.div 
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span>Made with</span>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <FaHeart className="text-red-500" />
                            </motion.div>
                            <span>by Onur TAŞDEMİR</span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
