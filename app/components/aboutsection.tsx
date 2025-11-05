'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 flex flex-col items-center px-6 md:flex-row md:justify-center gap-12 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md"
      >
        <Image
          src="/happy-person.jpg"
          alt="Pessoa saudável"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
          Natural, Eficaz e Seguro
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          As cápsulas BlueBloon são formuladas com ingredientes 100% naturais e
          certificados, ajudando seu corpo a queimar gordura de forma equilibrada,
          sem comprometer sua saúde. Nosso produto é resultado de anos de pesquisa
          e inovação em nutrição natural.
        </p>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700">
          Saiba Mais
        </Button>
      </motion.div>
    </section>
  );
}
