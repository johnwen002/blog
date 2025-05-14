import { useLoaderData } from "react-router";
import { getAuth } from "~/auth/auth-server";
import SignUpForm from "~/components/signup-form";
import type { Route } from "./+types/sign-up";

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });

  return session?.user;
}

const Page = () => {
  const load = useLoaderData();

  return <SignUpForm />;
};
export default Page;
