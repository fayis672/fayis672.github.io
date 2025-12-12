"use client";

import { motion } from "framer-motion";

const skills = {
    Languages: ["Dart", "Python", "Java", "JavaScript", "SQL",],
    Frameworks: ["Flutter", "Android Native", "FastAPI", "Node.js", "TensorFlow", "OpenCV"],
    Tools: ["Git", "Android Studio", "Xcode", "Burp Suite", "Firebase", "Figma", "Postman"],
    "Core Concepts": ["Clean Architecture", "SOLID Principles", "Penetration Testing", "REST APIs", "AI Integration", "Mobile Security", "Image Processing"],
};

export default function Skills() {
    return (
        <section id="skills" className="w-full py-24 px-6 sm:px-12 bg-zinc-50/50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                        Technical Arsenal
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        A curated list of technologies and tools I use to build and secure digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 border-l-2 border-zinc-900 dark:border-zinc-50 pl-3">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1 text-sm rounded-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
