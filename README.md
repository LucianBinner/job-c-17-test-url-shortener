# URL Shortener

### Description

API that shortens URLS

The api was created with the NestJS framework, and written in typescript that runs on NodeJS. The data is persisted in a relational database with PostgreSQL, communication between the API and the database is done by the Prisma ORM.

## Documentation Swagger

The api was documented with Swagger, to access type the api domain with "api" at the end, example: http://localhost:3000/api

## Setup

### Observation

You must have NodeJS installed at version v20.11.1 or higher.

The package manager used was Yarn in version 1.22.18 or higher, and is necessary for the project to function correctly.

You must have an instance of PostgreSQL running. The user, password and bank name settings can be changed in the .env file, simply change the DATABASE_URL environment variable.

All routes are configured in the postman file, just import the "url-shortener.postman_collection" file into your postman and view them

### Cloning repository on github

```bash
$ git clone https://github.com/LucianBinner/job-c-17-test-url-shortener.git
```

### Project setup

```bash
$ yarn install
```

### Running migrations in the database

```bash
$ yarn prisma migrate deploy
```

### Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Setup With Docker Compose

### Observation

Have docker installed on your computer

### Start Application

```bash
# upload application
$ docker compose up

# close application
$ docker compose down
```

## Stay in touch

- Author - [Lucian Binner](https://github.com/LucianBinner)

