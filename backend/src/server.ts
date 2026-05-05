import "dotenv/config";
import Fastify from "fastify";

import { env } from "./config/env";

const app = Fastify({
  logger: true,
});

const start = async () => {
  try {
    await app.listen({
      port: env.port,
      host: "0.0.0.0",
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

void start();
