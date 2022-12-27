import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (request, resolve, context) => {
    return resolve(
      context.json([
        {
          name: "Chocolate",
          image: "/images/chocolate.png",
        },
        {
          name: "Vanilla",
          image: "/images/vanilla.png",
        },
      ])
    );
  }),
];
