"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experienceData = [
    {
        role: "Software Engineer",
        company: "Techware Lab",
        period: "Apr 2024 – Present",
        points: [
            "Developing and maintaining production-grade mobile apps using Flutter.",
            "Implementing secure authentication flows, encrypted storage, and API-level security measures.",
            "Performing mobile app & API pentesting using Burp Suite, intercepting traffic, analyzing vulnerabilities, and recommending fixes.",
            "Integrating AI-driven components for automation and enhanced user experience.",
            "Collaborating with backend and DevOps teams to improve performance and reliability.",
        ],
        link: "https://techwarelab.com", // Placeholder
    },
    {
        role: "Software Engineer",
        company: "Applogiq",
        period: "Oct 2023 – Mar 2024", // Adjusted year based on logical flow
        points: [
            "Contributed to a Fintech application with over 1M downloads and secure architecture and optimized workflows.",
            "Implemented mobile flavors, adaptive UI, and platform-specific improvements.",
            "Worked on security-aware code practices and API-hardening measures.",
        ],
        link: "https://www.applogiq.org/",
    },
    {
        role: "Software Developer",
        company: "iLapz Technologies",
        period: "Jun 2022 – Sep 2024",
        points: [
            "Integrated ML/AI models, including OCR and prediction systems, into Flutter applications.",
            "Used isolates and multithreading for heavy computations and background tasks.",
            "Developed APIs, location modules, and CI/CD-ready mobile deployments.",
            "Conducted internal pentesting for mobile API endpoints and authentication workflows.",
        ],
        link: "https://ilapz.com/",
    },
    {
        role: "Software Engineer Intern",
        company: "TFN Enterprise Pvt Ltd",
        period: "Feb 2022 – Jun 2022",
        points: [
            "Built an e-commerce platform using Flutter Web & Mobile.",
            "Integrated payment gateways, Firebase services, and secure login flows.",
        ],
        link: "https://tfnofficial.com/",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="w-full py-24 px-6 sm:px-12 bg-white dark:bg-zinc-950">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                        Professional Timeline
                    </h2>
                    <div className="w-12 h-1 bg-zinc-900 dark:bg-zinc-50 rounded-full" />
                </motion.div>

                <div className="border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-12 relative">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-[-2px] top-0 w-[2px] bg-zinc-900 dark:bg-zinc-50"
                    />
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-zinc-900 dark:border-zinc-50" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="text-zinc-600 dark:text-zinc-400 font-medium">
                                    {exp.company}
                                </div>
                                {exp.link && exp.link !== "#" && (
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                                {exp.points.map((point, idx) => (
                                    <li key={idx} className="pl-1">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
