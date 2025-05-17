import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "~/db/schema/auth-schema";
export const cheatsheet = sqliteTable("cheatsheet", {
  id: text("id").primaryKey(),
  content: text("content").notNull(),
  authorId: text("author_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  published: integer("published", { mode: "boolean" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});
