'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: '“Em apenas 2 meses, perdi 8kg com BlueBloon! Me sinto mais leve e disposta.”',
      author: 'Maria S.',
    },
    {
      text: '“Já tentei de tudo, mas só BlueBloon trouxe resultados reais e duradouros.”',
      author: 'Camila P.',
    },
    {
      text: '“Mais energia, menos ansiedade e um corpo que eu amo ver no espelho.”',
      author: 'Fernanda L.',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-blue-50 text-center flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-12">
        Resultados Reais de Quem Já Testou
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md max-w-sm text-left"
          >
            <p className="italic text-gray-600 mb-4">{t.text}</p>
            <h4 className="font-semibold text-blue-600">{t.author}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
