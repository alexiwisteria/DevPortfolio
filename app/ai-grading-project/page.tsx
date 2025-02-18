'use client';

import React from 'react';
import { motion } from "framer-motion";
import Particles from "../components/particles";
import ProjectTemplate from '../ProjectTemplate';
import { ProjectContent } from '../types/project';
import { aiGradingProject } from '../data/ai-grading-project';

export default function AIGradingProjectPage() {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10" quantity={200} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="container mx-auto px-4 py-8"
      >
        <ProjectTemplate content={aiGradingProject} />
      </motion.div>
    </div>
  );
} 