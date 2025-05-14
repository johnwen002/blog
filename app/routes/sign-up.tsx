import { getAuth } from "~/auth/auth-server";
import SignUpForm from "~/components/sign-up-form";
import type { Route } from "./+types/sign-up";

export async function loader({ context, request }: Route.LoaderArgs) {
  const auth = getAuth(context);
  const session = await auth.api.getSession({ headers: request.headers });

  return {
    baseURL: context.cloudflare.env.BETTER_AUTH_URL,
    user: session?.user,
  };
}

const Page = () => {
  return (
    <>
      <SignUpForm />
    </>
  );
};
export default Page;
