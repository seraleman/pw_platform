import Image from 'next/image'
import { Product } from '@/seed/seed'
import Link from 'next/link'

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="bg-white dark:bg-purple-brand p-4 rounded-2xl shadow-lg">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.imagenes[0]}
          alt={product.nombre}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-xl"
        />
        <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">
          {product.nombre}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          {product.descripcion}
        </p>
        <p className="text-gray-800 dark:text-gray-200 font-bold mt-2">
          ${product.precio.toLocaleString('es-CO')}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Base: {product.base}
        </p>
        {product.topings.length > 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Toppings: {product.topings.join(', ')}
          </p>
        )}
      </Link>
    </div>
  )
}
