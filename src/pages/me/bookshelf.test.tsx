import { render } from "../../testUtils";
import { byRole, byTestId, byText } from "testing-library-selector";
import userEvent from "@testing-library/user-event";
import Profile from "./profile";
import Bookshelf from "./bookshelf";

const ui = {
  pageTitle: byText(/Bookshelf/),
};

test("My 本棚の本が表示される", async () => {
  render(<Bookshelf />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
