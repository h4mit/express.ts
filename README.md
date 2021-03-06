# ExpressJS with TypeScript language RestfulAPI

This is a simple API that saves user information. 


## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

After that, you will have to replace the mongoURL with your MongoDB address in *server/app.ts*

## Clone this repository

```
git clone https://github.com/h4mit/express.ts.git .
```

Then install the dependencies

```
npm install or npm i
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Testing over HTTP 

The default URL is: *http://127.0.0.1:3000/users*

+ GET all users

+ Post register new user   *https://127.0.0.1:3000/user*

```
{
    "username": "h4mit",
    "firstName": "Hamid",
    "lastName": "Taheri",
    "email": "h4mit@aroin.ir",
    "password": "h4mith4mit",
    "role": "admin",
    "permissions": ["REPORT", "EDIT_USER"]
}

```

```
Send GET request to https://127.0.0.1:3000/users/
```

## Testing over HTTPs 

The default URL is: *https://127.0.0.1:3000*

The key and cert in the config folder is for testing purpose only. You should generate your own.

*Reference from [Lynda.com](https://www.lynda.com/Node-js-tutorials/Next-steps/633869/671263-4.html)*