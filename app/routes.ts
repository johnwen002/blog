import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  route("/api/auth/*", "./routes/auth.ts"),
  route("/sign-up", "./routes/sign-up.tsx"),
  route("/login", "./routes/login.tsx"),
  layout("./layout/blog-layout.tsx", [
    route("/articles", "./routes/articles.tsx"),
  ]),
  layout("./layout/bo-layout.tsx", [route("/home", "./routes/home.tsx")]),
] satisfies RouteConfig;
