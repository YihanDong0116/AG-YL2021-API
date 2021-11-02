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
docker run -p 3001:3001 node-docker-heroku-cicd npm run test  
```

## Start

``` shell script
docker run -p 3001:3001 node-docker-heroku-cicd npm run start
```

## Browse

go to [https://localhost:3001]
for Swagger UI API documentation go to [https://localhost:3001/api-docs]

## Browse api documentation

go to [https://localhost:3000/api-docs] or see [https://ag-2021-server.herokuapp.com/api-docs/#/]


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

There is a GitHub action configured to generate and publish this client to the NPM registry, if for some reason you need to do this manually follow the steps below.

Generate the client

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

it is not possible to republish packages to the NPM registry, if you need to publish changes be sure to update the version according to [semver](https://semver.org/) rules, most likely you will just need to bump the patch version of the OpenAPI specification at /src/api.json

