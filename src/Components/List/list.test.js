import { render, screen } from "@testing-library/react";
import List from "./index.js";

const testProps = { name: "kaz" };

test("should have a name of kaz", () => {
  render(<List {...testProps} />);
  const nameElement = screen.getByText("kaz");
  expect(nameElement).toBeInTheDocument();
});
