import React from 'react';

const Roadmap = () => {
    const currentFocus = [
        {
            title: 'Docker & Containerization',
            status: 'Active',
            progress: 65,
            description: 'Containerizing Node.js apps for consistent development environments.'
        },
        {
            title: 'Linux Fundamentals',
            status: 'Active',
            progress: 50,
            description: 'Command-line proficiency and system administration basics.'
        },
        {
            title: 'DevOps Fundamentals',
            status: 'In Progress',
            progress: 35,
            description: 'Understanding CI/CD pipelines and deployment workflows.'
        }
    ];

    const upNext = [
        {
            title: 'Testing (Jest)',
            target: 'Q2 2026',
            description: 'Unit and integration testing for Node.js applications.'
        },
        {
            title: 'SQL & PostgreSQL',
            target: 'Q3 2026',
            description: 'Relational databases to complement NoSQL experience.'
        },
        {
            title: 'TypeScript',
            target: 'Q3 2026',
            description: 'Type-safe JavaScript for scalable backend development.'
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 w-full py-24">
            {/* Header */}
            <div className="mb-16 space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-white">
                    Learning Roadmap
                </h2>
                <p className="text-zinc-400 max-w-2xl text-lg">
                    Focused path to becoming a strong software engineer, prioritizing fundamentals before infrastructure.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Current Focus */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <h3 className="text-2xl font-bold text-white">Current Focus</h3>
                    </div>

                    <div className="space-y-4">
                        {currentFocus.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-6 hover:bg-zinc-900/70 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-white font-bold text-lg">
                                        {item.title}
                                    </h4>
                                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium whitespace-nowrap ml-4">
                                        {item.status}
                                    </span>
                                </div>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="mt-4">
                                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                                        <span>Progress</span>
                                        <span>~{item.progress}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-white to-zinc-400 rounded-full transition-all duration-500"
                                            style={{ width: `${item.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Up Next */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                        <h3 className="text-2xl font-bold text-white">Up Next</h3>
                    </div>

                    <div className="space-y-4">
                        {upNext.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm p-6 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-white font-bold text-lg">
                                        {item.title}
                                    </h4>
                                    <span className="px-3 py-1 rounded-full bg-zinc-800 border border-white/10 text-zinc-400 text-xs font-medium whitespace-nowrap ml-4">
                                        Target: {item.target}
                                    </span>
                                </div>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Note */}
                    <div className="rounded-2xl border border-white/5 bg-zinc-900/20 p-5 mt-6">
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            <span className="text-zinc-400 font-medium">Note:</span> Flexible timelines based on academic workload and depth of understanding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
