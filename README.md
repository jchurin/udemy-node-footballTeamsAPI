# rest-node-mongo

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

## Instructions
After cloning into repo, cd to project root directory and install dependencies:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```

To build for production, run build:

```
$ npm run build
```

## MongoDB Instructions

Run it by doing 'mongod --dbpath /System/Volumes/Data/data/db'

Create a folder called 'seed' on the root of the project.

Then start mongo server with 'mongod'.

project/seed $ ``mongoimport --db __database__ --collection __resource__ --file __resource.json__``

To connect to db -> mongo __database__

## Turbo deploy instructions

Get APP ID from turbo360 account (from page of turbo360)

Run `turbo app APP_ID`

Run `turbo login` (mail and password)

Run `turbo deploy`