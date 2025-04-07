import { UserForm } from '@/components/admin/users/UserForm'

export default function CreateUserPage() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-full bg-gray-100 p-4">
      <div className="w-full max-w-md p-4">
        <UserForm />
      </div>
    </div>
  )
}
