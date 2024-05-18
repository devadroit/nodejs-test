

# run mongodb with docker
```docker run --name mongodb-node-tes -p 27017:27017 -e MONGODB_INITDB_ROOT_USERNAME=mongodb -e MONGODB_INITDB_ROOT_PASSWORD=password -d mongodb/mongodb-community-server:7.0-ubuntu2204```