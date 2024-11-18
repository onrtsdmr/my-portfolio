'use client';

import { motion } from "framer-motion";
import { FaBuilding, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';

interface TimelineItem {
    title: string;
    company: string;
    location: string;
    period: string;
    duration: string;
    description: string;
    accomplishments: string[];
}

const timelineData: TimelineItem[] = [
    {
        title: "Intern",
        company: "VeriUs Teknoloji",
        location: "Istanbul, Turkey",
        period: "Tem 2019 - Ağu 2019",
        duration: "2 ay",
        description: "Led machine learning initiatives, contributing to advancements in artificial intelligence projects.",
        accomplishments: [
            "Developed a word vectorization kernel in hyperbolic space, achieving 88% accuracy in natural language processing tasks.",
            "Pioneered advancements in machine learning by implementing cutting-edge algorithms and optimizing model performance.",
            "Enhanced the artificial intelligence capabilities within the organization, delivering successful and scalable solutions."
        ]
    },{
        title: "Intern",
        company: "VeriUs Teknoloji",
        location: "Istanbul, Turkey",
        period: "Tem 2019 - Ağu 2019",
        duration: "2 ay",
        description: "Led machine learning initiatives, contributing to advancements in artificial intelligence projects.",
        accomplishments: [
            "Developed a word vectorization kernel in hyperbolic space, achieving 88% accuracy in natural language processing tasks.",
            "Pioneered advancements in machine learning by implementing cutting-edge algorithms and optimizing model performance.",
            "Enhanced the artificial intelligence capabilities within the organization, delivering successful and scalable solutions."
        ]
    },{
        title: "Intern",
        company: "VeriUs Teknoloji",
        location: "Istanbul, Turkey",
        period: "Tem 2019 - Ağu 2019",
        duration: "2 ay",
        description: "Led machine learning initiatives, contributing to advancements in artificial intelligence projects.",
        accomplishments: [
            "Developed a word vectorization kernel in hyperbolic space, achieving 88% accuracy in natural language processing tasks.",
            "Pioneered advancements in machine learning by implementing cutting-edge algorithms and optimizing model performance.",
            "Enhanced the artificial intelligence capabilities within the organization, delivering successful and scalable solutions."
        ]
    },{
        title: "Intern",
        company: "VeriUs Teknoloji",
        location: "Istanbul, Turkey",
        period: "Tem 2019 - Ağu 2019",
        duration: "2 ay",
        description: "Led machine learning initiatives, contributing to advancements in artificial intelligence projects.",
        accomplishments: [
            "Developed a word vectorization kernel in hyperbolic space, achieving 88% accuracy in natural language processing tasks.",
            "Pioneered advancements in machine learning by implementing cutting-edge algorithms and optimizing model performance.",
            "Enhanced the artificial intelligence capabilities within the organization, delivering successful and scalable solutions."
        ]
    },
];

const Timeline = () => {
    const cardVariants = {
        hover: {
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    return (
        <section id="experience" className="py-20 bg-white dark:bg-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                    Deneyim
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                    Profesyonel kariyerimde edindiğim deneyimler ve başarılar
                </p>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-600 dark:bg-orange-500 rounded-full" />

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-center justify-between mb-16`}
                        >
                            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                <div className="w-8 h-8 bg-white dark:bg-black rounded-full border-4 border-purple-600 dark:border-orange-500 z-10" />
                                <div className="absolute w-12 h-12 bg-purple-200 dark:bg-orange-200 rounded-full animate-ping opacity-20" />
                            </div>
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <motion.div
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="timeline-card"
                                >
                                    <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-800">
                                        <div className="flex flex-col gap-4">
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold text-purple-600 dark:text-orange-500">
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                    <FaBuilding className="w-4 h-4" />
                                                    <span className="font-medium">{item.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                                                    <FaMapMarkerAlt className="w-4 h-4" />
                                                    <span>{item.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                                                    <FaRegCalendarAlt className="w-4 h-4" />
                                                    <span>{item.period} · {item.duration}</span>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                                                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                                                    &quot;{item.description}"
                                                </p>
                                                
                                                <div className="space-y-3">
                                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                                        Öne Çıkan Başarılar
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {item.accomplishments.map((accomplishment, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 dark:bg-orange-500 rounded-full flex-shrink-0" />
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                                    {accomplishment}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            
                            <div className="w-5/12" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Timeline;