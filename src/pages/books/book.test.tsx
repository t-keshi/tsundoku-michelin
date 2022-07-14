import { render } from "../../testUtils";
import { byRole } from "testing-library-selector";
import Book from "./[bookId]";

const ui = {
  catchCopy: byRole("button", { name: /あなたの積読を、みんなの資産に。/ }),
};

test("本の詳細が正しく表示される", async () => {
  render(<Book />);

  expect(ui.catchCopy.get()).toBeInTheDocument();
});
