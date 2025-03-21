"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import NavigationButtons from "@/components/NavigationButtons";

export default function Home() {
  return (
    <>
      <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="h-screen w-full snap-start flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700">
          <motion.h1
            className="text-5xl font-bold text-white text-center px-4"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
            }}
          >
            Welcome to FitSync
          </motion.h1>
        </section>

        {/* Second Section */}
        <section className="h-screen w-full snap-start flex items-center justify-center bg-gradient-to-b from-blue-700 to-blue-900">
          <div className="text-white text-center px-4">
            <h2 className="text-3xl font-semibold mb-4">Section 2</h2>
            <p className="text-xl">Placeholder content</p>
          </div>
        </section>

        {/* Third Section */}
        <section className="h-screen w-full snap-start flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950">
          <div className="text-white text-center px-4">
            <h2 className="text-3xl font-semibold mb-4">Section 3</h2>
            <p className="text-xl">Placeholder content</p>
          </div>
        </section>
      </main>

      <NavigationButtons />
    </>
  );
}
