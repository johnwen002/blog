import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "~/db/schema/auth-schema";

export const tags = sqliteTable("tags", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const articles = sqliteTable("articles", {
  id: text("id").primaryKey(),
  title: text("title").notNull().unique(),
  content: text("content").notNull(),
  authorId: text("author_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  published: integer("published", { mode: "boolean" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }),
});

export const articleTags = sqliteTable("article_tags", {
  id: text("id").primaryKey(),
  articleId: text("article_id")
    .notNull()
    .references(() => articles.id, { onDelete: "cascade" }),
  tagId: text("tag_id")
    .notNull()
    .references(() => tags.id, { onDelete: "cascade" }),
});

export const comments = sqliteTable("comments", {
  id: text("id").primaryKey(),
  articleId: text("article_id")
    .notNull()
    .references(() => articles.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
