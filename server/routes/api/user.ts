import { UserController } from "../../controllers/user.controller";
var auth = require('../auth');

export class UserRoutes {
    public userController: UserController = new UserController();

    public routes(app): void {

        // GET - all Users 
        app.route('/users').get(auth.HasRole('admin'), this.userController.getUsers);

        // POST endpoint - Add new User
        app.route('/user').post(this.userController.addNewUser);

        app.route('/user/login').post(this.userController.login);

        // User detail
        app.route('/user/:userID')
            .get(auth.Auth ,this.userController.getUserWithID)
            .put(auth.Auth ,this.userController.updateUser)
            .delete(auth.Auth ,this.userController.deleteContact)
    }
}

