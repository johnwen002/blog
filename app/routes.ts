import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  route("/api/auth/*", "./routes/auth.ts"),
  layout("routers/secutiry.tsx", { id: "secutiry" }, [
    route("/sign-up", "./routes/sign-up.tsx", { id: "sign-up" }),
    route("/login", "./routes/login.tsx", { id: "login" }),
    layout(
      "./layout/bo-layout.tsx",
      {
        id: "bo-layout",
      },
      [route("/", "./routes/home.tsx")]
    ),
    layout("./layout/blog-layout.tsx", [
      route("/articles", "./routes/articles.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
