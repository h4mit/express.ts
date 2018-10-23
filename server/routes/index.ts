import * as express from "express";

import { UserRoutes } from "./api/user";

export class Routes {

    public user: UserRoutes = new UserRoutes();

    public routes(app): void {
        let userRouting = this.user.routes();
        app.use('/api/user', userRouting);

    }
}