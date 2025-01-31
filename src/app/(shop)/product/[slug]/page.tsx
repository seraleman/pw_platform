import { productsData } from '@/seed/seed'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export default async function NamePage({ params }: Props) {
  const { slug } = await params

  const product = productsData.find((product) => product.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image
        src={product.imagenes[0]}
        alt={product.nombre}
        width={900}
        height={500}
        className="rounded-lg shadow-lg mx-auto"
      />
      <h1 className="text-3xl font-bold mt-6">{product.nombre}</h1>
      <p className="text-lg text-gray-700 mt-2">{product.descripcion}</p>
      <p className="text-xl font-semibold mt-4 text-purple-brand">
        ${product.precio.toLocaleString()} COP
      </p>

      <button
        // onClick={addToCart}
        className="mt-6 bg-purple-brand text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
      >
        Agregar al carrito
      </button>
      <div className="mt-6">
        <Link href="/" className="text-purple-600 hover:underline">
          Volver a la tienda
        </Link>
      </div>
    </div>
  )
}
