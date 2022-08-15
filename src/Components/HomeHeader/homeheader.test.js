import { render, screen } from "@testing-library/react";
import HomeHeader from ".";

test("should have a header", () => {
  render(<HomeHeader />);
  const header = screen.getByText("Welcome to TheCocktailDB")
  expect(header).toBeInTheDocument()
});
