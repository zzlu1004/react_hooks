
interface iRouteConfig {
    path: string;
    component: any;
    childRoutes?: Array<any>;
}

export type IRouteConfig = iRouteConfig