import { count } from "drizzle-orm";
import { useLoaderData } from "react-router";
import { articles } from "~/db/schema";
import type { Route } from "./+types/articles";

export async function loader({ context, request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const page = parseInt(searchParams.get("page") || "0");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const articleResults = await context.db
    .select()
    .from(articles)
    .offset(page * pageSize)
    .limit(pageSize);
  const total = await context.db.select({ value: count() }).from(articles);
  return {
    total: total,
    articles: articleResults,
  };
}

const ArticlePage = () => {
  const loader = useLoaderData<{
    total: number;
    articles: any[];
  }>();
  return (
    <div>
      articles:
      {loader.articles.map((article) => (
        <div key={article.id}>{article.content}</div>
      ))}
    </div>
  );
};
export default ArticlePage;
