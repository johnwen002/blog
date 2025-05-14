import { createAuthClient } from "better-auth/client";

let authClient: ReturnType<typeof createAuthClient>;

export function getAuthClient() {
  if (!authClient) {
    authClient = createAuthClient();
  }

  return authClient;
}
