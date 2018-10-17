import { UserRoutes } from "./api/user";

export class Routes {

    public user: UserRoutes = new UserRoutes();

    public routes(app): void {
        // app.use('/api, );
        this.user.routes(app);

    }
}