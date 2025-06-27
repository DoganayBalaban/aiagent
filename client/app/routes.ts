import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),route("workflows","routes/workflows.tsx"),route("canvas","routes/canvas.tsx"),route("executions","routes/executions.tsx"),route("credentials","routes/credentials.tsx"),route("variables","routes/variables.tsx"),route("templates","routes/templates.tsx")] satisfies RouteConfig;
