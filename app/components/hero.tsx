'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-blue-600 to-teal-400 text-white overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
      >
        Emagreça com Saúde com a <span className="text-green-200">BlueBloon</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="max-w-2xl text-lg mb-8"
      >
        Cápsulas naturais que aceleram o metabolismo, aumentam sua energia e
        promovem o bem-estar que você merece.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-blue-100 transition">
          Quero Conhecer
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 right-10 hidden md:block"
      >
        <Image
          src="/public/capsules.jpg"
          alt="Cápsulas BlueBloon"
          width={350}
          height={350}
          className="opacity-90 drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
}
