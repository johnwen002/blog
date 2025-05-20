import { auth } from 'auth'
import type {Route} from './+types/auth-guard'
import { redirect } from 'react-router'
export async function loader({context, request}: Route.LoaderArgs) {
  const session = await auth.api.getSession({ headers: request.headers})
  if (!session?.user) {
    return redirect("/login")
  }
  return session.user
}