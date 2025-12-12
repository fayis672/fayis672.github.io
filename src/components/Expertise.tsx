"use client";

import { motion } from "framer-motion";
import { Smartphone, Brain, Shield } from "lucide-react";

const expertiseItems = [
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "Crafting intuitive, high-performance mobile experiences for iOS and Android.",
    },
    {
        icon: Brain,
        title: "AI-Driven Systems",
        description:
            "Integrating machine learning models to build smarter, adaptive applications.",
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description:
            "Securing digital infrastructures with robust, proactive defense strategies.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Expertise() {
    return (
        <section id="expertise" className="w-full py-24 px-6 sm:px-12 bg-zinc-50/50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center sm:text-left"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Core Expertise
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        Over 3 years of refining the intersection of user experience and technical reliability.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="mb-6 p-3 w-fit rounded-lg bg-zinc-100 dark:bg-zinc-900 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800 transition-colors">
                                <item.icon className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
