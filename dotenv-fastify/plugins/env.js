import * as dotenv from "dotenv";

export default async function configPlugin(server, options, done) {
  try {
    const envConfig = dotenv.config();
    server.decorate("config", envConfig.parsed);
    done();
  } catch (err) {
    done(err);
  }
}
