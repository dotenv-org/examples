import Fastify from "fastify";
import fastifyPlugin from "fastify-plugin";

import indexRoutes from "./routes/index.js";
import envPlugin from "./plugins/env.js";

const fastify = Fastify({ logger: true });
fastify.register(fastifyPlugin(envPlugin));
fastify.register(fastifyPlugin(indexRoutes));

async function initAppServer() {
  // We have to call fastify.ready() so that
  // fastify begins loading and applying all
  // of the plugins, and then the `fastify`
  // object applies all the decoration required
  // for us to access `fastify.config`
  await fastify.ready();

  try {
    await fastify.listen({ port: fastify.config.HTTP_PORT || 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

initAppServer();
