import { ProductForm } from '@/components/admin/products/ProductForm'

export default function CreateProductPage() {
  return (
    <div className="flex-1 bg-gray-100 p-4">
      <ProductForm mode="create" />
    </div>
  )
}
