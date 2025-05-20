import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/api/auth/*", "./routes/auth.ts"),
  route("/setup", "routes/setup.tsx"),
  route("/login", "routes/login.tsx"),
  layout("routes/auth-guard.tsx", {id: "auth-guard"}, [
  ])
 
] satisfies RouteConfig;
