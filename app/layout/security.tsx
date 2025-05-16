import { Outlet, redirect } from "react-router";
import { getAuth } from "~/auth/auth-server";
import type { Route } from "./+types/security";

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });
  if (session?.user) {
    return redirect("/");
  }
  return null;
}

const Page = () => {
  return <Outlet />;
};
export default Page;
