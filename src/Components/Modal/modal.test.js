import { fireEvent, render, screen } from "@testing-library/react";
import DrinkModal from "./index.js";

const testProps = {
  modal: true,
  showModal: jest.fn,
  data: [
    { strDrink: "Orange", strIngredient1: "Salt", idDrink: 1 },
    { strDrink: "Apple", strIngredient2: null, idDrink: 2 }
  ],
  id: 1
};

test("should have a drink name of orange since id=1", () => {
  render(<DrinkModal {...testProps} />);
  const drinkName = screen.getByTestId("name");
  expect(drinkName.innerHTML).toBe("Orange");
});

test("should have inrgredient of salt since id=1", () => {
  render(<DrinkModal {...testProps} />);
  const drinkName = screen.getByTestId("ingredient");
  expect(drinkName.innerHTML).toBe("Salt");
});


