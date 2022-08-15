import { render, screen } from "@testing-library/react";
import InputField from "./index.js";

const testProps = { handleData: jest.fn };

test("Given an Input value it should set then input value to what was typed", () => {
  render(<InputField {...testProps} />);
  const inputElement = screen.getByPlaceholderText("search for a cocktail...");
  inputElement.value = "orange";
  expect(inputElement).toHaveValue("orange");
});
