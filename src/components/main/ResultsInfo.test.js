import { render } from "@testing-library/react";
import ResultsInfo from "./ResultsInfo";

import randomNumber from "random-number";
import randomString from "randomstring";

const propsArray = new Array(100).fill().map(() => {
  return {
    query: randomString.generate(),
    data: randomNumber({ min: 0, max: 1, integer: true }),
  };
});

for (let props of propsArray) {
  test("Вывод названия запроса", () => {
    const { container, getByRole } = render(
      <ResultsInfo query={props.query} data={props.data} />
    );
    if (props.query) {
      const element = getByRole("heading", { level: 2 });
      expect(element).toHaveClass(`results_info`);
      expect(element).toBeInTheDocument();
      if (props.data) {
        expect(element).toHaveTextContent(
          `Результаты по запросу - ${props.query}`
        );
      } else {
        expect(element).toHaveTextContent(
          `По запросу - ${props.query} - не найдено результатов`
        );
      }
    } else {
      expect(container).toBeNull();
    }
  });
}
