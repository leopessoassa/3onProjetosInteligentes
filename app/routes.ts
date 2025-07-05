import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("contato", "routes/contato.tsx"),
    //route("corporativo", "routes/corporativo.tsx"),
    route("profissionais", "routes/profissionais.tsx"),
    route("residencial", "routes/residencial.tsx"),
    route("sobre", "routes/sobre.tsx"),
] satisfies RouteConfig;


