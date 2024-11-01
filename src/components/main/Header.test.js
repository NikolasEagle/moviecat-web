import { render } from "@testing-library/react";
import Header from "./Header";

test("Заголовок главной страницы", () => {
  const { getByRole } = render(<Header />);

  const element = getByRole("heading", {
    level: 1,
    name: "MovieCat",
  });

  expect(element).toHaveClass("header");

  expect(element).toBeVisible();
});
