'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
    name: string;
    email: string;
    message: string;
    // recaptchaToken?: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    // const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const formControls = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { 
            scale: 0.95 
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if (!recaptchaToken) {
        //     alert('Lütfen reCAPTCHA doğrulamasını tamamlayın.');
        //     return;
        // }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    // recaptchaToken
                }),
            });

            if (!response.ok) throw new Error('Gönderme hatası');
            
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            // setRecaptchaToken(null);
        } catch (err) {
            setSubmitStatus('error');
            console.error('Contact form error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-black">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-4"
            >
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-orange-400 dark:to-orange-600 text-transparent bg-clip-text">
                            İletişime Geçin
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Projeleriniz veya işbirliği fırsatları için benimle iletişime geçebilirsiniz.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">
                    <motion.div
                        variants={formControls}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    İsim
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-purple-600 dark:focus:border-orange-500 focus:ring-2 focus:ring-purple-600/20 dark:focus:ring-orange-500/20 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-purple-600 dark:focus:border-orange-500 focus:ring-2 focus:ring-purple-600/20 dark:focus:ring-orange-500/20 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Mesaj
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-purple-600 dark:focus:border-orange-500 focus:ring-2 focus:ring-purple-600/20 dark:focus:ring-orange-500/20 bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-colors duration-300"
                                />
                            </div>

                            <div className="flex justify-center">
                                {/* <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                    onChange={(token) => setRecaptchaToken(token)}
                                /> */}
                            </div>

                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-orange-400 dark:to-orange-600 hover:from-purple-700 hover:to-purple-900 dark:hover:from-orange-500 dark:hover:to-orange-700 transition-all duration-300 disabled:opacity-50"
                            >
                                <FaPaperPlane className={`${isSubmitting ? 'animate-bounce' : ''}`} />
                                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                            </motion.button>

                            <AnimatedStatusMessage status={submitStatus} />
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-orange-400 dark:to-orange-600 text-transparent bg-clip-text">
                                İletişim Bilgileri
                            </h3>
                            <div className="space-y-6">
                                <ContactLink
                                    icon={<FaEnvelope />}
                                    href="mailto:your.email@example.com"
                                    text="your.email@example.com"
                                />
                                <ContactLink
                                    icon={<FaGithub />}
                                    href="https://github.com/yourusername"
                                    text="github.com/yourusername"
                                />
                                <ContactLink
                                    icon={<FaLinkedin />}
                                    href="https://linkedin.com/in/yourusername"
                                    text="linkedin.com/in/yourusername"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

const ContactLink = ({ icon, href, text }: { icon: React.ReactNode, href: string, text: string }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 dark:hover:bg-orange-950/20 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-orange-500 transition-all duration-300"
        whileHover={{ x: 10 }}
    >
        {icon}
        <span>{text}</span>
    </motion.a>
);

const AnimatedStatusMessage = ({ status }: { status: 'success' | 'error' | null }) => {
    if (!status) return null;

    return (
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-center mt-4 ${
                status === 'success' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
            }`}
        >
            {status === 'success' 
                ? 'Mesajınız başarıyla gönderildi!' 
                : 'Bir hata oluştu. Lütfen tekrar deneyin.'}
        </motion.p>
    );
};

export default Contact;
