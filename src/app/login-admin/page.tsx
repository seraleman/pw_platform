import { LoginForm } from '@/components/admin/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-4">
        <LoginForm />
      </div>
    </div>
  )
}
