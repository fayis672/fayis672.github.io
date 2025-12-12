"use client";

import { motion } from "framer-motion";
import { Terminal, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center min-h-[80vh] w-full p-6 sm:p-12 text-center sm:text-left overflow-hidden">
            {/* Background Accent - Optional subtle gradient blob */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-200/50 dark:bg-zinc-900/50 rounded-full blur-3xl -z-10 pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center sm:items-start gap-6 max-w-4xl"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
                >
                    <Terminal size={14} className="text-zinc-500 dark:text-zinc-400" />
                    <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300">
                        Hello World!
                    </span>
                </motion.div>

                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="block"
                    >
                        Fayis Muhammed
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-zinc-500 dark:text-zinc-500 text-3xl sm:text-5xl mt-2 block"
                    >
                        Software Engineer.
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
                >
                    Architecting secure, intelligent mobile ecosystems. I bridge the gap between complex AI systems and seamless user experiences with precision engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400"
                >
                    <a href="https://github.com/fayis672/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors hover:scale-110 transform duration-200">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/fayis-muhammed-095999135/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors hover:scale-110 transform duration-200">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:fayistkm36@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors hover:scale-110 transform duration-200">
                        <Mail size={20} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
                >
                    <a
                        href="resume.pdf"
                        download="Fayis_Muhammed_Resume.pdf"
                        className="flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background font-medium transition-all hover:scale-105 active:scale-95 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center justify-center h-12 px-8 rounded-full border border-zinc-200 dark:border-zinc-800 font-medium transition-all hover:scale-105 active:scale-95 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
