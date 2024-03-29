import App from "./App";
import { render, screen } from "./utils/test-utils";

it("Should return posts when clicking fetch button", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: "Hello world!",
      level: 1,
    })
  ).toBeDefined();
});
