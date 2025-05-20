import { auth } from "auth";
import { eq } from "drizzle-orm";
import { redirect } from "react-router";
import { db } from "~/db";
import { user } from "~/db/schema";
import type { Route } from "./+types/setup";

export async function loader({ context, request }: Route.LoaderArgs) {
  const db_user = await db.select().from(user).where(eq(user.name, "john"));
  // console.log(db_user);
  // if (!db_user) {
  //   const userId = nanoid();
  //   type NewAccount = typeof account.$inferInsert;
  //   const newAccount: NewAccount = {
  //     id: nanoid(),
  //     providerId: nanoid(),
  //     accountId: nanoid(),
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //     userId,
  //     password: "johnwen@123",
  //   };

  //   type NewUser = typeof user.$inferInsert;
  //   const newUser: NewUser = {
  //     id: userId,
  //     email: "johnwen002@gmail.com",
  //     name: "john",
  //     emailVerified: true,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   };
  //   await db.insert(account).values(newAccount);
  //   await db.insert(user).values(newUser);
  // }
  if (db_user.length == 0) {
    await auth.api.signUpEmail({
      body: {
        email: "johnwen002@gmail.com",
        name: "john",
        password: "johnwen@123",
      },
    });
  }
  return redirect("/login");
}
