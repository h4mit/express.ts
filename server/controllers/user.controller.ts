import { Request, Response } from 'express';
import User from '../models/user.model';
import * as passport from 'passport';



export class UserController {

    public addNewUser(req: Request, res: Response) {
        let newUser = new User(req.body);
        newUser.setPassword(req.body.password);

        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
          return res.json({user: newUser.toAuthJSON()});
        });
    }

    public login(req, res, next) {
        if(!req.body.username){
          return res.status(422).json({errors: {username: "can't be blank"}});
        }
      
        if(!req.body.password){
          return res.status(422).json({errors: {password: "can't be blank"}});
        }
      
        passport.authenticate('local', {session: false}, function(err, user, info){
          if(err){ return next(err); }
          if(user){
            user.token = user.generateJWT();
            return res.json({user: user.toAuthJSON()});
          } else {
            return res.status(422).json(info);
          }
        })(req, res, next);
    }

    public getUsers(req: any, res: Response) {
        //res
        User.find({}, (err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        });
    }

    public getUserWithID (req: Request, res: Response) {           
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {           
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteContact (req: Request, res: Response) {           
        User.remove({ _id: req.params.userId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ state: true, response: { message: 'Successfully deleted User!' }});
        });
    }

}