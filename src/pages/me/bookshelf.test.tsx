import { byText } from "testing-library-selector";
import { render } from "../../testUtils";
import BookshelfPage from "./bookshelf";

const ui = {
  pageTitle: byText(/Bookshelf/),
};

test("My 本棚の本が表示される", async () => {
  render(<BookshelfPage />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
