'use client'

import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsappButton = () => {
  const phoneNumber = '573504621667' // Reemplazar con el número real
  const message = encodeURIComponent('Hola, quiero hacer mi pedido!')

  const whatsappLink = () => {
    if (
      typeof window !== 'undefined' &&
      /Android|iPhone/i.test(navigator.userAgent)
    ) {
      return `https://wa.me/${phoneNumber}?text=${message}`
    }
    return `whatsapp://send?phone=${phoneNumber}&text=${message}`
  }

  return (
    <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-14 right-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition z-10">
        <FaWhatsapp size={32} />
      </div>
    </Link>
  )
}
