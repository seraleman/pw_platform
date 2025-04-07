import { UserList } from '@/components/admin/users/UserList'

export default function UsersPage() {
  return (
    <div className="flex flex-1 items-center justify-center min-h-full bg-gray-100 p-4">
      <UserList />
    </div>
  )
}
