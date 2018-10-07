import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";

export class Routes {
    public userController: UserController = new UserController();

    public routes(app): void {

        // GET - all Users 
        app.route('/users').get(this.userController.getUsers)

        // POST endpoint - Add new User
        app.route('/user').post(this.userController.addNewUser)

        // User detail
        app.route('/user/:userID')
            .get(this.userController.getUserWithID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteContact)
    }
}