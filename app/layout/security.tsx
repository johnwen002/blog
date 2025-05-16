import { Navigate, Outlet, useLoaderData } from "react-router";
import { getAuth } from "~/auth/auth-server";
import type { Route } from "./+types/security";

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });
  return session?.user;
}

const Page = () => {
  const user = useLoaderData();
  if (user) return <Navigate to="/" />;
  return <Outlet />;
};
export default Page;
