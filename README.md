
  

# React + Nodejs + MongodDB Voting App

![MERN Stack Development](https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129195859/original/e6a55e9dc89755bc3cbe0a5fc6605eefa336dafa/be-your-mern-stack-developer-mongodb-express-react-nodejs.png)

  

*Live version: https://react-nodejs-mongodb-votingapp.gemanepa.repl.co*
[![Run on Repl.it](https://repl.it/badge/github/gemanepa/react-nodejs-mongodb-votingapp)](https://repl.it/github/gemanepa/react-nodejs-mongodb-votingapp)

  
  

## Required Software

  

-  `sudo apt-get install nodejs` installs NodeJS

  

-  `sudo apt install -y mongodb` installs MongoDB

  

  

## Scripts

  

-  `npm run install` installs application modules


-  `npm run start` runs server with mongodb cloud connection


-  `npm run mongodb` runs a local mongodb instance instead of cloud


-  `npm run dblocalconnect` runs a server which connects to a local mongodb instance instead of mongodb cloud 
  

-  `npm run lint` remarks code outside of app's codestyle

  

  

## Running issues fixes

MongoDB: "*Failed to set up listener: SocketException: Address already in use*" -> sudo pkill -f mongod