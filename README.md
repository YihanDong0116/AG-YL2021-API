# node-docker-heroku-cicd

A test repo for setting up CICD from a node application to be published on heroku

## Install

``` shell script
npm install
```

## Build

``` shell script
docker build . -t node-docker-heroku-cicd
```

## Test

``` shell script
docker run -p 3000:3000 node-docker-heroku-cicd npm run test  
```

## Start

``` shell script
docker run -p 3000:3000 node-docker-heroku-cicd npm run start  
```

## Browse

go to [https://localhost:3000]

## Stop

find container ID

``` shell script
docker ps
```

using container ID from previous command

``` shell script
docker stop <container ID>
```