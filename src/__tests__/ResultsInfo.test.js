import { render } from "@testing-library/react";
import ResultsInfo from "../components/main/ResultsInfo";

test("Вывод сообщения о найденных или не найденных результатах", () => {
  const { container, rerender, getByRole } = render(
    <ResultsInfo
      query={""}
      data={Array(50)
        .fill()
        .map((elem, index) => index + 1)}
    />
  );

  expect(container.firstChild).toBeNull();

  rerender(
    <ResultsInfo
      query={"человек паук"}
      data={Array(50)
        .fill()
        .map((elem, index) => index + 1)}
    />
  );

  expect(
    getByRole("heading", {
      level: 2,
      name: "Результаты по запросу - человек паук",
    })
  ).toHaveClass("results_info");

  rerender(<ResultsInfo query={"gfdgsfdgsgf"} data={[]} />);

  expect(
    getByRole("heading", {
      level: 2,
      name: "По запросу - gfdgsfdgsgf - не найдено результатов",
    })
  ).toHaveClass("results_info");
});
