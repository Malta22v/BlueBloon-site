"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">BlueBloon</h1>
        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-500 transition">Sobre</a>
          <a href="#testimonials" className="hover:text-blue-500 transition">Resultados</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contato</a>
        </div>
      </div>
    </motion.nav>
  );
}
