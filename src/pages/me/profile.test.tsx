import { render } from "../../testUtils";
import { byRole, byTestId, byText } from "testing-library-selector";
import userEvent from "@testing-library/user-event";
import Profile from "./profile";

const ui = {
  pageTitle: byText(/Profile/),
};

test("ユーザーがログインしているケースで、ユーザーはプロフィールを変更し、その結果を見ることができる", async () => {
  render(<Profile />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
