import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";

import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";

test("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (request, resolve, context) => {
      resolve(context.status(500));
    }),
    rest.get("http://localhost:3030/toppings", (request, resolve, context) => {
      resolve(context.status(500));
    })
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
});
