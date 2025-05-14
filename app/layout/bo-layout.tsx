import { Outlet } from "react-router";
import { getAuth } from "~/auth/auth-server";
import type { Route } from "./+types/bo-layout";

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });

  return session?.user;
}
const BOLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default BOLayout;
