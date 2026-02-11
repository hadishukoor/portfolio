import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Hera-Lux",
            status: "Client Project · In Progress",
            description: "A focused e-commerce prototype for a boutique brand. Handles product cataloging and cart state.",
            tech: "React, Node.js, Express, MongoDB",
            implemented: [
                "JWT Authentication",
                "Product Catalog",
                "Shopping Cart State"
            ],
            planned: [
                "Payment Integration",
                "Order Management"
            ],
            link: "#"
        },
        {
            title: "Note Nest",
            status: "Academic Project",
            description: "A CRUD-focused application demonstrating backend data persistence and user session management.",
            tech: "Node.js, Express, MongoDB",
            implemented: [
                "User Sessions",
                "Create/Read/Update/Delete",
                "Tag System"
            ],
            planned: [
                "Real-time Updates",
                "File Attachments"
            ],
            link: "#"
        },
        {
            title: "Compost-Platform",
            status: "Academic / Personal Project",
            description: "A waste management connection platform prototype connecting users with service providers.",
            tech: "HTML, Tailwind, PHP, MySQL",
            implemented: [
                "Provider Registration",
                "Service Request Flow",
                "Admin Overview"
            ],
            planned: [
                "Migration to Node.js",
                "Status Notifications"
            ],
            link: "#"
        }
    ];

    return (
        <div className="section-container">
            <div className="mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
                    Selected Projects
                </h2>
                <p className="text-neutral-400 max-w-2xl text-lg">
                    A selection of client, academic, and personal projects focused on full-stack development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.title} className="rounded-3xl border border-white/5 bg-zinc-900/40 p-8 space-y-6 hover:bg-zinc-900/60 transition-colors duration-300">

                        {/* Title + Status */}
                        <div>
                            <h3 className="text-xl font-medium text-white">{project.title}</h3>
                            <p className="text-xs uppercase tracking-wide text-neutral-500 mt-1">
                                {project.status}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-300 leading-relaxed max-w-prose">
                            {project.description}
                        </p>

                        {/* Tech Used */}
                        <p className="text-sm text-neutral-400 font-mono">
                            {project.tech}
                        </p>

                        {/* Implemented vs Planned */}
                        <div className="space-y-6 pt-2">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-white">Implemented</p>
                                <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
                                    {project.implemented.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {project.planned && (
                                <div className="space-y-2">
                                    <p className="text-sm text-neutral-500">Planned</p>
                                    <ul className="list-disc list-inside text-sm text-neutral-500 space-y-1">
                                        {project.planned.map(item => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Link */}
                        <div className="pt-4 mt-auto">
                            <a href={project.link || "#"} className="inline-block text-sm underline text-neutral-300 hover:text-white underline-offset-4 transition-colors">
                                View source on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
