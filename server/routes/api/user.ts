import { UserController } from "../../controllers/user.controller";
var auth = require('../auth');

export class UserRoutes {
    public userController: UserController = new UserController();

    public routes(app): void {

        // GET - all Users 
        app.get('/users', auth.required, this.userController.getUsers)

        // POST endpoint - Add new User
        app.route('/user').post(this.userController.addNewUser)

        // User detail
        app.route('/user/:userID')
            .get(this.userController.getUserWithID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteContact)
    }
}

