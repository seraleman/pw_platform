import Link from 'next/link'

export const LoginForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h1>
      <form>
        {/* Campo de Usuario */}
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Usuario
          </label>
          <input
            type="text"
            id="username"
            placeholder="Usuario"
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

        {/* Botón de Ingresar */}
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-3 rounded-full shadow-md hover:bg-purple-800 transition"
        >
          Ingresar
        </button>
      </form>

      {/* Enlace de Olvidaste tu contraseña */}
      <div className="text-center mt-6">
        {/* <a href="#" className="text-sm text-purple-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </a> */}
        <Link href="#" className="block px-4 py-2 rounded hover:bg-purple-600">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </div>
  )
}
