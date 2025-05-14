import { getAuth } from "~/auth/auth-server";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });

  return {
    baseURL: context.cloudflare.env.BETTER_AUTH_URL,
    user: session?.user,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <>home</>;
}
