import { ProductForm } from '@/components/admin/products/ProductForm'
import { productsData } from '@/seed/seed'
import { notFound } from 'next/navigation'

export default function EditProductPage({
  params,
}: {
  params: { slug: string } // Cambiado a 'slug' para coincidir con el nombre del parámetro en la ruta
}) {
  const product = productsData.find((p) => p.slug === params.slug) // Usar params.slug

  if (!product) {
    notFound()
  }

  // Adaptar el producto para que coincida con la estructura esperada por ProductForm
  const adaptedProduct = {
    slug: product.slug,
    nombre: product.nombre,
    descripcion: product.descripcion,
    precio: product.precio,
    imagenes: product.imagenes,
  }

  return (
    <div className="flex-1 bg-gray-100 p-4">
      <ProductForm mode="edit" initialData={adaptedProduct} />
    </div>
  )
}
