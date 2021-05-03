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

## Building the client

This project uses [OpenAPI Generator](https://openapi-generator.tech/) to generate client code for the Algorithm API

Generating a client is easy

``` shell script
npx openapi-generator-cli generate -g javascript --additional-properties=usePromises=true -o client -i ./src/public/api.json
```

this client can then be published to the NPM registry to be used by the UI, you will require an NPM account to publish

if you have not added your user credentials to local NPM yet you will need to do that first, follow the prompts after invoking the following

``` shell script
npm adduser
```

log into NPM registry

``` shell script
npm login
```

publish

``` shell script
npm publish
```