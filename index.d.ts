declare module "fastify" {
  interface FastifyInstance {
    fetch: import("node-fetch");
  }
}
