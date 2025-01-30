'use client'

import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-gray-900 text-white py-4 text-center border-t border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center items-center gap-4 text-sm">
        {/* Texto de derechos reservados */}
        <p className="opacity-80">
          Todos los derechos reservados &copy; {new Date().getFullYear()}
        </p>

        {/* Separador visual */}
        <span className="opacity-50">|</span>

        {/* Instagram */}
        <a
          href="https://instagram.com/purple.wellness"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
        >
          <FaInstagram className="w-4 h-4 text-pink-500" />
          <span>@purple.wellness</span>
        </a>

        {/* Separador visual */}
        <span className="opacity-50">|</span>

        {/* Créditos del desarrollador */}
        <p className="opacity-80">
          Desarrollado por <span className="font-semibold">Esfera SD</span>
        </p>
      </div>
    </motion.footer>
  )
}
