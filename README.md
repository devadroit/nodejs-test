
### README 

### HOW TO SETUP AND RUN PROJECT

1. *FIRST STEP*
    - INSTAL NODE JS DEPENDENCIES
    `` NPM I``

2. *SECOND STEP*
    - Run Docker with Mongo DB
    - # run mongodb with docker
        ```docker run --name mongodb-node-tes -p 27017:27017 -e MONGODB_INITDB_ROOT_USERNAME=mongodb -e MONGODB_INITDB_ROOT_PASSWORD=password -d mongodb/mongodb-community-server:7.0-ubuntu2204```

3. *THIR STEP*
    - Then configure your own .env file with the examples provided by .env.example

4. *FOURTH STEP*
    - Write on CMD or PW
        - yarn dev