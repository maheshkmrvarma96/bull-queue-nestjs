# bull-queue



## Description

Queues are a powerful design pattern that help you deal with common application scaling and performance challenges.

## Installation

```bash
$ npm i -g @nestjs/cli

# If it requires admin user permission use

$ sudo npm i -g @nestjs/cli

$ npm install

# To begin using it, we first install the required dependencies.

$ npm install --save @nestjs/bull bull

# Bull uses Redis to persist job data, so you'll need to have Redis installed on your system.
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
