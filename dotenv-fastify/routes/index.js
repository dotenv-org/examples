export default async function indexRoutes(server, options) {
  server.get("/", async (request, reply) => {
    return {
      hello: "hello world",
      debugLevel: server.config.DEBUG_LEVEL,
    };
  });
}
