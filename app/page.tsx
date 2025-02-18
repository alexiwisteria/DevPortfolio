"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "./components/particles";
import Terminal from "./components/terminal";

export default function Home() {
    return (
        <div className="w-screen h-screen overflow-y-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            {/* Full Page Animation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex flex-col items-center justify-start min-h-screen pt-32"
            >
                {/* Animated Particles */}
                <Particles className="absolute inset-0 -z-10" quantity={200} />

                {/* Title Section */}
                <div className="flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="py-3.5 px-0.5 z-10 text-4xl text-transparent bg-white cursor-default sm:text-6xl md:text-9xl bg-clip-text"
                    >
                        Alexis Lee
                    </motion.h1>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        className="pt-1 pb-2 text-center"
                    >
                        <h2 className="text-md text-zinc-500 mb-2">
                            Aspiring Data & AI Solutions Architect
                        </h2>
                        <h2 className="text-sm text-zinc-500">
                            Currently refining my database knowledge, leading student projects as a Scrum Master, and
                            exploring ethical AI integrations.
                        </h2>
                    </motion.div>
                </div>

                {/* Terminal Section */}
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full px-4 md:px-8 lg:px-12 mt-16"
                >
                    <Terminal />
                </motion.div>
            </motion.div>
        </div>
    );
}
