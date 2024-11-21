'use client';

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectType {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
}

const projects: ProjectType[] = [
    {
        title: "Portfolio Website",
        description: "Kişisel portfolyo websitesi. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirildi.",
        image: "https://picsum.photos/1024/1024",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com"
    },
    {
        title: "Portfolio Website",
        description: "Kişisel portfolyo websitesi. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirildi.",
        image: "https://picsum.photos/1024/1024",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com"
    },
    {
        title: "Portfolio Website",
        description: "Kişisel portfolyo websitesi. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirildi.",
        image: "https://picsum.photos/1024/1024",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com"
    },
    {
        title: "Portfolio Website",
        description: "Kişisel portfolyo websitesi. Next.js, TypeScript ve Tailwind CSS kullanılarak geliştirildi.",
        image: "https://picsum.photos/1024/1024",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-4"
            >
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                    Projeler
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                    Geliştirdiğim bazı önemli projeler
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-4 md:p-6">
                                <h3 className="text-2xl font-bold text-purple-600 dark:text-orange-500 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm bg-purple-100 dark:bg-orange-900/20 text-purple-600 dark:text-orange-500 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-orange-500 transition-colors"
                                        >
                                            <FaGithub className="w-5 h-5" />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-orange-500 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="w-4 h-4" />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
