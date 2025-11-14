"use client";

// This component uses the exact "Awwwards-Style Page Transitions" 
// tutorial from the research [cite: 1356, 1361]
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // These are the animation properties from the tutorial [cite: 1366, 1367]
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}