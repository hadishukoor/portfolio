import React from 'react';

const Contact = () => {
    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: 'hadishukoor111@gmail.com',
            href: 'mailto:hadishukoor111@gmail.com',
            description: 'Best for project inquiries and collaborations'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'linkedin.com/in/hadishkoor111',
            href: 'https://www.linkedin.com/in/hadishukoor111',
            description: 'Professional networking and career opportunities'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            value: 'github.com/hadishukoor',
            href: 'https://github.com/hadishukoor',
            description: 'Open source contributions and personal projects'
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 w-full py-24">
            {/* Header */}
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Let's Connect
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Open to opportunities, collaborations, and technical discussions.
                    Feel free to reach out through any of these channels.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                    <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-8 hover:bg-zinc-900/80 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                            {method.icon}
                        </div>

                        {/* Label */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                            {method.label}
                        </h3>

                        {/* Value */}
                        <p className="text-zinc-400 font-medium mb-3 group-hover:text-white transition-colors break-all">
                            {method.value}
                        </p>

                        {/* Description */}
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            {method.description}
                        </p>

                        {/* Arrow indicator */}
                        <div className="mt-6 flex items-center gap-2 text-zinc-600 group-hover:text-white transition-colors">
                            <span className="text-sm font-medium">Get in touch</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>

            {/* CTA Box */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/50 backdrop-blur-sm p-10 text-center">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-3">
                        Looking for an Aspiring Developer?
                    </h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                        I'm actively seeking opportunities to contribute to meaningful projects and grow as a software engineer.
                        Available for full-time roles and freelance work.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:hadishukoor111@gmail.com"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
                        >
                            Send a Message
                        </a>
                        <a
                            href="/Mohammad_Hadi_Shukoor_CV.pdf"
                            download
                            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hadishukoor111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
                        >
                            View LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
