# A Node.js and PostgreSQL example

The basics for setting up a Node application with a containerized PostgreSQL instance.

This repo includes:
- A basic container setup using a docker-compose.yml
- A GitHub action for building and running tests against a PostgreSQL service
- A PostgreSQL migration
- A database configuration using `pg`
- A Mocha unit test example queying the containerized database
- A simplified, reusable, initdb script to get you running in a jiffy
- Useful NPM scripts

## Requirements
- Node.js, I recommend the latest LTS (v12 currently)
- Docker

## Setup
```
$ npm install
$ npm initdb
```

## Running Tests
```
$ npm test
```
