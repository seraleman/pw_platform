export const UserForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Crear Usuario</h1>
      <form>
        {/* Campo de Nombre */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Campo de Correo Electrónico */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        {/* Campo de Rol */}
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Rol
          </label>
          <select
            id="role"
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="admin">Admin</option>
            <option value="super-admin">Super Admin</option>
          </select>
        </div>

        {/* Botón de Crear */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-full shadow-md hover:bg-purple-800 transition"
        >
          Crear Usuario
        </button>
      </form>
    </div>
  )
}
