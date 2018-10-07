import {Request, Response} from "express";

export class Routes {    
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // User 
        app.route('/users') 
        // GET endpoint 
        .get((req: Request, res: Response) => {
        // Get all users            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })        
        // POST endpoint
        .post((req: Request, res: Response) => {   
        // Create new user         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            })
        })

        // User detail
        app.route('/user/:userID')
        // get specific user
        .get((req: Request, res: Response) => {
        // Get a single user detail            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        .put((req: Request, res: Response) => {
        // Update a user           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            })
        })
        .delete((req: Request, res: Response) => {       
        // Delete a user     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            })
        })
    }
}