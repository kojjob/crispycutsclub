import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth-utils'

export default async function DashboardPage() {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/login')
  }
  
  // Redirect based on user role
  switch (user.role) {
    case 'CLIENT':
      redirect('/dashboard/client')
    case 'BARBER':
      redirect('/dashboard/barber')
    case 'AGENCY':
      redirect('/dashboard/agency')
    case 'ADMIN':
      redirect('/dashboard/admin')
    default:
      redirect('/')
  }
}