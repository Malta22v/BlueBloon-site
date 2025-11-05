'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // ícones

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-blue-600">BlueBloon</h1>

        {/* 🔹 Menu desktop */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-500 transition">Sobre</a>
          <a href="#testimonials" className="hover:text-blue-500 transition">Resultados</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contato</a>
        </div>

        {/* 🔹 Botão hambúrguer (visível só no mobile) */}
        <button
          className="md:hidden text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Menu mobile com animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-inner"
          >
            <div className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Sobre</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Resultados</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500">Contato</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
