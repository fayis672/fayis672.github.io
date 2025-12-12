"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full py-24 px-6 sm:px-12 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
                        Let's Collaborate
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center gap-3">
                            <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
                                <MapPin size={24} />
                            </div>
                            <span className="text-zinc-600 dark:text-zinc-400 font-medium">Malappuram, Kerala</span>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
                                <Mail size={24} />
                            </div>
                            <a href="mailto:fayistkm36@gmail.com" className="text-zinc-600 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                fayistkm36@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
                                <Phone size={24} />
                            </div>
                            <a href="tel:+919656728841" className="text-zinc-600 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                                +91 96567 28841
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
