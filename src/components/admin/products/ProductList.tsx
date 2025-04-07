'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { productsData } from '@/seed/seed'

export const ProductList = () => {
  const handleDelete = (slug: string) => {
    console.log(`Eliminar producto ${slug}`)
    // Implementar lógica para eliminar producto
    // Ejemplo: mostrar modal de confirmación
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Productos</h1>
        <button
          className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition"
          onClick={() => console.log('Crear nuevo producto')}
        >
          Nuevo Producto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <div
            key={product.slug}
            className="border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={product.imagenes[0]}
                alt={product.nombre}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.nombre}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">
                {product.descripcion}
              </p>
              <p className="text-purple-700 font-bold mb-4">
                ${(product.precio / 1000).toFixed(3)}
              </p>
              <div className="flex justify-between">
                <Link
                  href={`/admin/products/edit/${product.slug}`}
                  className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  <FaEdit /> Editar
                </Link>
                <button
                  onClick={() => handleDelete(product.slug)}
                  className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  <FaTrash /> Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
