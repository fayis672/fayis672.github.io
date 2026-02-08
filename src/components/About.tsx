"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="w-full py-24 px-6 sm:px-12 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
                        Behind the Code
                    </h2>

                    <div className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-6">
                        <p>
                            Software Engineer who writes Flutter apps, secures APIs, and occasionally questions why <span className="text-zinc-900 dark:text-zinc-200 font-medium italic">semicolons</span> can ruin an entire day.
                        </p>
                        <p>
                            With <span className="text-zinc-900 dark:text-zinc-200 font-bold">3+ years of experience</span>, I build fast, clean, and scalable mobile applications. I also dive into cybersecurity, poking at apps to make sure things don’t fall apart when users (or hackers 👀) get creative. And yes—AI helps me code faster… sometimes too fast.
                        </p>
                        <p>
                            I love turning ideas into smooth user experiences, debugging issues that shouldn’t exist, and blending <span className="text-zinc-900 dark:text-zinc-200 font-medium">Mobile + Security + AI</span> into one powerful toolkit.
                        </p>
                        <p className="font-medium text-zinc-900 dark:text-zinc-200 pt-4">
                            If you need someone who can build the app, test the app, secure the app, and still laugh at their own bugs, I’m your guy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
