"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Expertise", href: "#expertise" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.href.replace("#", ""));
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex items-center justify-end md:justify-center px-6 py-4 transition-all duration-300",
                    scrolled || isOpen
                        ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
                        : "bg-transparent"
                )}
            >
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 bg-zinc-100/50 dark:bg-zinc-900/50 px-8 py-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-sm">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href === "#home") {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                    setActiveSection(item.href.replace("#", ""));
                                }}
                                className="relative text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 py-2"
                            >
                                <span
                                    className={cn(
                                        "relative z-10 transition-colors duration-200",
                                        activeSection === item.href.replace("#", "")
                                            ? "text-zinc-900 dark:text-zinc-50 font-semibold"
                                            : "text-zinc-500 dark:text-zinc-400"
                                    )}
                                >
                                    {item.name}
                                </span>

                                {activeSection === item.href.replace("#", "") && (
                                    <motion.div
                                        layoutId="desktop-nav-underline"
                                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-zinc-900 dark:bg-zinc-50"
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-zinc-900 dark:text-zinc-50 z-50 bg-zinc-100/50 dark:bg-zinc-900/50 rounded-md backdrop-blur-sm"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 pt-24 px-6 md:hidden flex flex-col items-center gap-8"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href === "#home") {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                    setActiveSection(item.href.replace("#", ""));
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "text-2xl font-bold transition-colors",
                                    activeSection === item.href.replace("#", "")
                                        ? "text-zinc-900 dark:text-zinc-50"
                                        : "text-zinc-500 dark:text-zinc-400"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
