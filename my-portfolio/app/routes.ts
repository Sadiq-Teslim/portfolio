import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects", "routes/project.tsx"),
  // route("home", "routes/home.tsx"), 
  route("projects/:id", "routes/projectDetails.tsx"),
] satisfies RouteConfig;
