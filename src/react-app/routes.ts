import {type RouteConfig, index, route, prefix} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/projects", "routes/projectDisplay.tsx"),
    ...prefix("/proj", [
        route("/GNG", "routes/GritNGlory.tsx"),
        route("/TortalWelfare", "routes/TortalWelfare.tsx"),
        /*route("/tANTrum", "routes/TortalWelfare.tsx"),*/
    ]),
    ] satisfies RouteConfig;