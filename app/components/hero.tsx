'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-blue-600 to-teal-400 text-white">
      {/* ===== Título principal ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
      >
        Emagreça com Saúde com a <span className="text-green-200">BlueBloon</span>
      </motion.h1>

      {/* ===== Subtítulo ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="max-w-2xl text-base sm:text-lg mb-8"
      >
        Cápsulas naturais que aceleram o metabolismo, aumentam sua energia e
        promovem o bem-estar que você merece.
      </motion.p>

      {/* ===== Botão de ação ===== */}
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-blue-100 transition">
          Quero Conhecer
        </Button>
      </motion.div>

      {/* ===== Imagem decorativa flutuante ===== */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="
          absolute
          bottom-[80px]       /* 🔹 agora ela sempre fica visível */
          left-1/2
          translate-x-[35%]  /* 🔹 desloca mais pra fora, sem cortar */
          md:left-auto
          md:right-0
          md:translate-x-[20%]
          pointer-events-none select-none
        "
      >
        <Image
          src="/capsules.png"
          alt="Cápsulas BlueBloon"
          width={750}
          height={750}
          className="
            opacity-60 drop-shadow-xl
            w-[220px] sm:w-[300px] md:w-[500px] lg:w-[600px]
          "
        />
      </motion.div>

      {/* ===== Transição suave pro fundo branco da próxima seção ===== */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#F7FAFC]" />
    </section>
  );
}
