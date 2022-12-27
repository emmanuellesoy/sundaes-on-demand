import { response, rest } from "msw";

export const handlers = [
  rest.get("http://localhost3030/scoops", (request, resolve, context) => {
    return response(
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
