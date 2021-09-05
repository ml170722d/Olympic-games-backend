# Olympic games Web App (backend)

# Installation

After downloading project, from project root run:
````bash
    npm install
````
to install all dependencies.

# Usage

1. Start mongodb (there is .cfg file provided to store data inside project):
`````bash
    mongod -f ./mongo/mongo.cfg
`````

2. Create .env file.

3. To run server, simply run:
````bash
    npm start
````

4. Start postman and import postman collection provided for testing

## ENV file

Env file needs to be created in project root and to contain:
1. HOST variable
2. PORT variable
3. DB variable

