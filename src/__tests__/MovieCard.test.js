import { render } from "@testing-library/react";

import MovieCard from "./MovieCard";

test("Отображение карточки фильма", () => {
  const { container } = render(
    <MovieCard
      id={430}
      year={2012}
      rating={5.8}
      name={"Test"}
      poster={"default.png"}
    />
  );

  expect(container.firstChild).toHaveAttribute(
    "style",
    '{"background":"linear-gradient(to top, black, transparent), url(\'default\')","backgroundRepeat":"no-repeat","backgroundSize":"cover","backgroundPosition":"center"}'
  );
  expect(container.firstChild).toHaveClass("card");
  expect(container.firstChild).toHaveAttribute("tabindex", "0");
});
