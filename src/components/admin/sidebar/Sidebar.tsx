import Link from 'next/link'

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-purple-700 text-white h-full flex flex-col">
      <div className="p-4 text-center font-bold text-lg border-b border-purple-600">
        Admin Panel
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link
              href="/admin/users"
              className="block px-4 py-2 rounded hover:bg-purple-600"
            >
              Usuarios
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="block px-4 py-2 rounded hover:bg-purple-600"
            >
              Productos
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
