import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import * as mongoose from "mongoose";
import * as path from 'path';

var router = require('express').Router();
require('./config/passport');


class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/EXTS';


    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.databaseGenerate();
        this.routePrv.routes(this.app);
        this.views();
        this.pConfig();
    }

    private config(): void {
        this.app.use(require('morgan')('dev'));
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/', express.static(path.join(__dirname, '../view')));
    }

    private pConfig(): void {
        this.app.use(function (err, req, res, next) {
            console.log(err.stack);

            res.status(err.status || 500);

            res.json({
                'errors': {
                    message: err.message,
                    error: err
                }
            });
        });
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {
            useCreateIndex: true,
            useNewUrlParser: true
        });
    }

    private databaseGenerate(): void {
        require('./models/user.model');
    }

    private views(): void {
        this.app.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname, '../view/index.html'));
        });
    }

}

export default new App().app;