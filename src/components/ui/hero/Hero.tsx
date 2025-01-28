'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Image and background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/bowl-background.png" // Ruta de la imagen del bowl
          alt="Bowl saludable"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-brand opacity-70"></div>
      </div>

      {/* Main text */}
      <motion.div
        className="text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight font-poppins">
          Disfruta la frescura y el bienestar
        </h1>
        <p className="text-lg sm:text-2xl mt-4 font-light font-poppins">
          Bowls saludables y vibrantes que nutren tu cuerpo y tu día.
        </p>
      </motion.div>
    </div>
  )
}
