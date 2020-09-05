import { FastifyPlugin } from "fastify";
import fetch from "node-fetch";
declare module "fastify" {
  interface FastifyInstance {
    fetch: fetch;
  }
}

declare const fastifyFetch: FastifyPlugin;
export default fastifyFetch;
