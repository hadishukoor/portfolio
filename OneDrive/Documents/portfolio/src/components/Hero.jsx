import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8 transform scale-125">
                {/* Main Heading */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                            Mohammad Hadi Shukoor
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-medium">
                        Aspiring Software Engineer
                    </p>
                </div>

                {/* Bio */}
                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                    Building web applications with JavaScript, React, and Node.js.
                    Currently learning full-stack development and exploring modern web technologies.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
