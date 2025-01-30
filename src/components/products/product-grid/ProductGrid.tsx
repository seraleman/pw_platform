import { Product, productsData } from '@/seed/seed'
import { ProductGridItem } from './ProductGridItem'

export const ProductGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {productsData.map((product: Product, index: number) => (
          <ProductGridItem key={index} product={product} />
        ))}
      </div>
    </div>
  )
}
