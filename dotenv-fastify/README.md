# About

This repository aims to provide Node.js developers who wish to build upon the [Fastify application framework](https://www.fastify.io) and use a configuration element that is based on a process's environment variable

## Using the demo

As a pre-requisite to using this demo Fastify application you need to copy the `.env-sample` file to `.env` so that the `dotenv` integration will load it up:

```sh
cp dotenv-sample .env
```

Then run the Node.js server:

```sh
npm run start
```

Now, you're ready to use this demo application in the following ways:
1. Inspect the `server.js` code and notice that the server instantiates based on an HTTP port information that is loaded from configuration.
2. Make a request to the top level `/` URL and notice that the `debugLevel` property is read from the `.env` configuration. You can fire a request from the CLI to test it: `curl "http://localhost:3000"`

## Environment variable configuration

It's common to access environment variables to configure different aspects of a running
Node.js application, such as:

```javascript
https.listen(process.env.HTTP_PORT, () => {
    console.log('server started on port: ', process.env.HTTP_PORT);
});
```

## Using dotenv for environment variable configuration

The [dotenv](https://snyk.io/advisor/npm-package/dotenv) npm package is a healthy project that aims to load configuration information from a file and load it into the `process.env` variable which is a global and available accessor in a Node.js application.

A simple usage example of dotenv is as follows:

```javascript
const dotenv = require('dotenv');
dotenv.config();
```

You can find more [dotenv code examples](https://snyk.io/advisor/npm-package/dotenv#code-examples) on the Snyk Advisor website.

Using `dotenv` is a common go-to for JavaScript and Node.js developers, as the project maintenance is healthy, and its popularity as to writing this documentation (December 2022) is at 30,000,000 downloads a month.

## Using dotenv with Fastify

Dotenv is used as a Fastify plugin and lives in [./plugins/env.js](./plugins/env.js), 
where it loads all the configuration information. It is there where it is also decorating
the fastify application instance with `config` option so that an example usage might be:

```javascript
const myPort = fastify.config.HTTP_PORT
```

You can then access any process environment variable from anywhere that has a
`fastify` application instance available.

Now, you need to register the environment configuration plugin, such as:

```javascript
import fastifyPlugin from "fastify-plugin";
import envPlugin from "./plugins/env.js";

const fastify = Fastify({ logger: true });
fastify.register(fastifyPlugin(envPlugin));
await fastify.ready();
```

Note that we're specifically doing two important decisions here:
1. We're registering the plugin in the same ancestor plugins hierarchy of the application itself so that other plugins, routes and such that are registered on this level can access the decoration's we've set in place within the config plugin.
2. Before the Fastify application initializes with the classic `fastify.listen()` we're calling `fastify.ready()` which is an async method, in order to load up all the plugins and execute their `fastify.decorate` actions. Then, this is available to use across other calls such as `fastify.listen({port: fastify.config.HTTP_PORT})`

# Author

Liran Tal <liran.tal@gmail.com>
