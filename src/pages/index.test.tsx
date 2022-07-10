import { render } from "../testUtils";
import Home from "./index";
import { byText } from "testing-library-selector";

const ui = {
  pageTitle: byText(/Books/),
};

test("本の一覧が正しく表示される", async () => {
  render(<Home />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
