import * as express from "express";
import { UserController } from "../../controllers/user.controller";
var auth = require('../auth');

export class UserRoutes {
    public userController: UserController = new UserController();

    public routes(): any {
        const router = express.Router();
        // GET - all Users 
        router.route('/list').get(auth.HasRole('admin'), this.userController.getUsers);

        // POST endpoint - Add new User
        router.route('/').post(this.userController.addNewUser);

        router.route('/login').post(this.userController.login);

        // User detail
        router.route('/:userID')
            .get(auth.Auth ,this.userController.getUserWithID)
            .put(auth.Auth ,this.userController.updateUser)
            .delete(auth.Auth ,this.userController.deleteContact)

        return router;
    }
}

