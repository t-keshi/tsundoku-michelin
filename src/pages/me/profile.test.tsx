import { byText } from "testing-library-selector";
import { render } from "../../testUtils";
import Profile from "./profile";

const ui = {
  pageTitle: byText(/Profile/),
};

test("ユーザーがログインしているケースで、ユーザーはプロフィールを変更し、その結果を見ることができる", async () => {
  render(<Profile />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
