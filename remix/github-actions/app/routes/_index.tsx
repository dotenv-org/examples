import type { V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json({
    ENV: {
      HELLO: process.env.HELLO, // HELLO="World" in .env file
    },
  });
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      Hello {data.ENV.HELLO}.
    </div>
  );
}
