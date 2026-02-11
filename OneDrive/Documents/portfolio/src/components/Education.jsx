import React from 'react';

const Education = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 w-full py-24" id="education">
            <div className="mb-16 space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-white">
                    Education
                </h2>
                <p className="text-zinc-400 max-w-2xl text-lg">
                    Academic foundation and qualifications.
                </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">B.Tech in Information Technology</h3>
                        <p className="text-zinc-400">Lovely Professional University</p>
                    </div>
                    <div className="text-zinc-500 font-mono text-sm">
                        2023 — 2027 (Expected)
                    </div>
                </div>
                <p className="text-zinc-400 leading-relaxed max-w-3xl">
                    Focusing on Data Structures, Algorithms, and Web Engineering. Active member of technical societies and participant in hackathons.
                </p>
            </div>
        </section>
    );
};

export default Education;
