'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaUpload, FaTrash } from 'react-icons/fa'

interface ProductFormProps {
  initialData?: {
    slug?: string
    nombre: string
    descripcion: string
    precio: number
    imagenes: string[]
  }
  mode: 'create' | 'edit'
}

export const ProductForm = ({
  initialData,
  mode = 'create',
}: ProductFormProps) => {
  const [formData, setFormData] = useState({
    nombre: initialData?.nombre || '',
    descripcion: initialData?.descripcion || '',
    precio: initialData?.precio,
    imagenes: initialData?.imagenes || [],
  })

  const [previewImages, setPreviewImages] = useState<string[]>(
    formData.imagenes
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'precio' ? parseFloat(value) || 0 : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Preparar datos para enviar al servidor
    const productData = {
      ...formData,
      precio: formData.precio,
    }

    console.log('Enviando datos:', productData)
    // TODO: Implementar lógica para guardar datos
    // mode === 'create' ? createProduct(productData) : updateProduct(initialData?.slug, productData)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      // Por ahora, creamos URLs temporales para vista previa
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      )

      setPreviewImages([...previewImages, ...newImages])

      // También actualizamos el estado del formulario con las nuevas imágenes
      setFormData({
        ...formData,
        imagenes: [...formData.imagenes, ...newImages],
      })
    }
  }

  const handleRemoveImage = (index: number) => {
    const newImages = [...previewImages]
    newImages.splice(index, 1)
    setPreviewImages(newImages)

    setFormData({
      ...formData,
      imagenes: newImages,
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        {mode === 'create' ? 'Crear Nuevo Producto' : 'Editar Producto'}
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Nombre del producto */}
        <div className="mb-6">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Descripción */}
        <div className="mb-6">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Precio */}
        <div className="mb-6">
          <label
            htmlFor="precio"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Precio (COP)
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            step="0.001"
            min="0"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Imágenes */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Imágenes
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="images"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <FaUpload className="text-gray-400 text-2xl mb-2" />
              <span className="text-gray-600">Subir imágenes</span>
              <span className="text-gray-400 text-sm mt-1">
                Haz clic o arrastra y suelta
              </span>
            </label>
          </div>

          {/* Vista previa de imágenes */}
          {previewImages.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {previewImages.map((img, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden"
                >
                  <div className="relative h-24 w-full">
                    <Image
                      src={img}
                      alt={`Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botón de guardar */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-full shadow-md hover:bg-purple-800 transition"
        >
          {mode === 'create' ? 'Crear Producto' : 'Guardar Cambios'}
        </button>
      </form>
    </div>
  )
}
