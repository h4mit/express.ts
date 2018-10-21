import * as jwt from 'jsonwebtoken';

var secret = require('../config').secret;

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}


var auth = {
    Auth: function (req, res, next) {
        jwt.verify(getTokenFromHeader(req), secret, function (err, decoded) {
            if (err) {
                return res.status(401).json({success: false, message: 'Failed to authenticate token.'});
            } else {
                next();
            }
        });
    },
    HasRole: function(role) {
        return function(req, res, next) {
            jwt.verify(getTokenFromHeader(req), secret, function (err, decoded) {
                if (err) {
                    return res.status(401).json({success: false, message: 'Failed to authenticate token.'});
                } else if(decoded.role == role){
                    next();
                } else {
                    return res.status(401).json({success: false, message: 'Failed to authenticate permission.'});
                }
            });
        }
    }
};


module.exports = auth;
