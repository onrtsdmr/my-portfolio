'use client';

import React from 'react';
import profilePic from '@/app/assets/images/profile_pic.png';

const Banner: React.FC = () => {
    // Metni harf harf ayırıyoruz, boşlukları da dâhil ediyoruz
    const nameArray = "Onur TAŞDEMİR".split("");

    return (
        <section className="w-full relative flex items-center justify-between h-screen bg-white dark:bg-black px-4">
            {/* Üstteki dairesel gradient (Light ve Dark moda göre ayarlanmış) */}
            <div
                className="absolute top-[-80%] left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] rounded-full z-10 overflow-hidden dark:hidden"
                style={{
                    background: "radial-gradient(circle, rgba(128,0,128,0.4) 0%, rgba(255,255,255,0) 60%)",
                }}
            ></div>
            <div
                className="absolute top-[-80%] left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] rounded-full z-10 overflow-hidden hidden dark:block"
                style={{
                    background: "radial-gradient(circle, rgba(255,165,0,0.4) 0%, rgba(0,0,0,0) 60%)",
                }}
            ></div>

            {/* Sol alttaki dairesel gradient (Light ve Dark moda göre ayarlanmış) */}
            <div
                className="absolute left-[-50%] bottom-[-50%] w-[80vw] h-[80vw] rounded-full z-10 overflow-hidden dark:hidden"
                style={{
                    background: "radial-gradient(circle, rgba(128,0,128,0.4) 0%, rgba(255,255,255,0) 60%)",
                }}
            ></div>
            <div
                className="absolute left-[-50%] bottom-[-50%] w-[80vw] h-[80vw] rounded-full z-10 overflow-hidden hidden dark:block"
                style={{
                    background: "radial-gradient(circle, rgba(255,165,0,0.4) 0%, rgba(0,0,0,0) 60%)",
                }}
            ></div>

            {/* Metin ve içerik kısmı */}
            <div className="text-left text-black dark:text-white w-1/2 z-20 px-8">
                <h1 className="text-2xl md:text-5xl font-bold mb-4">
                    Hello, I'm{" "}
                    <span className="text-purple-700 dark:text-orange-400">
                        {nameArray.map((char, index) => (
                            <span
                                key={index}
                                className="inline-block opacity-0 animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                        {/* Yanıp sönen imleç */}
                        <span
                            className="inline-block bg-purple-700 dark:bg-orange-400 w-[2px] h-9 ml-1 align-middle animate-blink"
                            style={{ animationDelay: `${nameArray.length * 0.1}s` }}
                        ></span>
                    </span>
                </h1>
                <p className="text-lg md:text-2xl font-light text-gray-500 dark:text-gray-300">
                    Yazılım dünyasında deneyim kazanmış, yeniliklere ve öğrenmeye açık bir
                    Full Stack Developer'ım. Web ve mobil uygulama geliştirme alanında güçlü
                    becerilere sahibim.
                </p>
            </div>

            {/* Profil resmi */}
            <div className="relative z-20">
                <img
                    src={profilePic.src}
                    alt="Onur TAŞDEMİR"
                    className="w-96 h-96 object-cover rounded-full shadow-lg"
                />
            </div>
        </section>
    );
};

export default Banner;