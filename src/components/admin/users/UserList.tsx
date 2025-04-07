export const UserList = () => {
  const users = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Ana Gómez',
      email: 'ana.gomez@example.com',
      role: 'Super Admin',
    },
    {
      id: 3,
      name: 'Carlos López',
      email: 'carlos.lopez@example.com',
      role: 'Admin',
    },
  ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Lista de Usuarios</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left text-sm font-medium text-gray-700 px-4 py-2 border-b">
              Nombre
            </th>
            <th className="text-left text-sm font-medium text-gray-700 px-4 py-2 border-b">
              Correo Electrónico
            </th>
            <th className="text-left text-sm font-medium text-gray-700 px-4 py-2 border-b">
              Rol
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b text-sm text-gray-700">
                {user.name}
              </td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">
                {user.email}
              </td>
              <td className="px-4 py-2 border-b text-sm text-gray-700">
                {user.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
