import { UserController } from "../../controllers/user.controller";
var auth = require('../auth');

export class UserRoutes {
    public userController: UserController = new UserController();

    public routes(app): void {

        // GET - all Users 
        app.route('/users').get(auth.required, this.userController.getUsers)

        // POST endpoint - Add new User
        app.route('/user').post(this.userController.addNewUser)

        // User detail
        app.route('/user/:userID')
            .get(auth.required ,this.userController.getUserWithID)
            .put(auth.required ,this.userController.updateUser)
            .delete(auth.required ,this.userController.deleteContact)
    }
}

