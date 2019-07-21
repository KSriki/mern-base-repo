# MERN BASE REPO

Base REPO that contains instructions for setup, configuration files etc. for creating a MERN application from scratch quickly.



## MongoDB

MongoDB is accessed through the mongoose javascript library:


### Local MongoDB

#### Install mongodb locally
brew install mongodb

#### Make a db folder for mongodb
sudo mkdir -p /data/db

#### Run mongodb (make sure the folders have read/write permissions for the current user!!)
sudo mongod

This starts mongodb on port 27017.

#### Create database 

mongo
use [insert database name here] // creates Database

Replace DB in server.js with the Database name.

### External MongoDB


Srikant Kumar Kalaputapu




