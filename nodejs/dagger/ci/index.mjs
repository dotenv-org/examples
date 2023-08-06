// ci/index.mjs
import 'dotenv/config'
console.log(process.env) // remove this after you've confirmed it is working

import { connect } from "@dagger.io/dagger"

connect(async (client) => {
  const node = client.container().from("node:16-slim").withExec(["node", "-v"])

  const version = await node.stdout()

  // print output
  console.log(`Hello ${process.env.HELLO}.`)
}, { LogOutput: process.stdout })
