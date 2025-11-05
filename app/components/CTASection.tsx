'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-blue-600 to-teal-400 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Comece sua transformação hoje
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto mb-8 text-lg opacity-90"
      >
        Aproveite nossa promoção especial e dê o primeiro passo rumo a uma nova
        versão de você. Resultados reais, com saúde e confiança.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-blue-100 transition">
          Comprar Agora
        </Button>
      </motion.div>
    </section>
  );
}
