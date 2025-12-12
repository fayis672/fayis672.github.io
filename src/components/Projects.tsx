"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Flutter Epub View",
        description: "A Flutter package for rendering Epub documents, with 1000 weekly downloads and secure architecture.",
        tech: ["Flutter", "Dart", "Android", "iOS"],
        link: "https://pub.dev/packages/flutter_epub_viewer",
    },
    {
        title: "Fintech App",
        description: "A fintech app with 1M weekly downloads and secure architecture.",
        tech: ["Flutter", "Dart", "Android", "iOS"],
        link: "#",
    },
    {
        title: "Ec Reader",
        description: "An Offline E-book reader with simple UI, grate reading experience and customized toolkit",
        tech: ["Flutter", "Dart", "Android", "iOS"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 px-6 sm:px-12 bg-zinc-50/50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center sm:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                        Engineering Projects
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        Selected works demonstrating secure architecture and intelligent design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group p-6 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                                    <FolderGit2 size={20} />
                                </div>
                                <a href={project.link} className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed h-20 overflow-hidden">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
