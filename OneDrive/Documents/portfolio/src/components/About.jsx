import React from 'react';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <section className="section-container relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {/* Column 1: Identity Card */}
                <div className="md:col-span-1 lg:col-span-1 flex flex-col gap-6">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="relative group">
                        {/* Soft Outer Glow */}
                        <div className="absolute -inset-1 bg-white/10 blur-xl rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                        {/* Image Container */}
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] md:aspect-auto md:h-full min-h-[300px] shadow-2xl">
                            <img
                                src="/profile.jpg"
                                alt="Mohammad Hadi Shukoor"
                                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Tagline overlay at bottom of image card */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-sm font-medium text-white/80">
                                    Mohammad Hadi Shukoor
                                </p>
                                <p className="text-xs text-zinc-400 mt-1">
                                    B.Tech IT & MERN Engineer
                                </p>
                            </div>
                        </div>
                    </Tilt>
                </div>

                {/* Columns 2-4: Narrative Bio & Stats */}
                <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-6">

                    {/* Narrative Card */}
                    <div className="glass-card p-8 md:p-10 flex-grow flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Academic Theory</span> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white">Practical Engineering.</span>
                        </h2>

                        <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                            <p>
                                <strong className="text-white">The Narrative:</strong> I am a B.Tech Information Technology student at Lovely Professional University (Class of 2027), bridging the gap between academic theory and scalable engineering. My journey started with C++ and strict algorithmic problem-solving, which evolved into a focus on <span className="text-white">Full-Stack Web Development</span>.
                            </p>
                            <p>
                                <strong className="text-white">The Expertise:</strong> I specialize in the <span className="text-white">MERN Stack</span> (MongoDB, Express, React, Node.js) and have delivered responsive, performance-optimized solutions for freelance clients.
                            </p>
                            <p>
                                <strong className="text-white">The Future:</strong> I am currently expanding my horizon into <span className="text-white">DevOps</span> (Docker, Linux) to master the complete software lifecycle, from local containerized development to secure production deployment.
                            </p>
                        </div>
                    </div>

                    {/* Stats Row - Bento Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Education */}
                        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Education</h4>
                            <p className="text-sm text-zinc-300">
                                B.Tech IT (LPU)<br />
                                <span className="text-zinc-500 text-xs">Expected 2027</span>
                            </p>
                        </div>

                        {/* Focus */}
                        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Focus</h4>
                            <p className="text-sm text-zinc-300">
                                Scalable MERN Apps &<br />DevOps Lifecycle
                            </p>
                        </div>

                        {/* Status */}
                        <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Status</h4>
                            <p className="text-sm text-zinc-300">
                                Open to Junior Roles &<br />Freelance
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
