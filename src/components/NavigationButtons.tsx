"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavigationButtons() {
  // TODO: SET LOG IN AUTH
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [collapseTimeout, setCollapseTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleMouseEnter = () => {
    if (collapseTimeout) {
      clearTimeout(collapseTimeout);
      setCollapseTimeout(null);
    }
    setIsNavExpanded(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsNavExpanded(false);
    }, 2000);
    setCollapseTimeout(timeout);
  };

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.3 }}
    >
      {!isLoggedIn ? (
        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
        >
          Log In
        </button>
      ) : (
        <motion.div
          className="flex gap-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isNavExpanded ? (
            <motion.div
              className="flex gap-2"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
                Home
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
                Workout
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
                History
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            </motion.div>
          ) : (
            <motion.button
              onClick={() => setIsNavExpanded(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
