import { byText } from "testing-library-selector";
import { render } from "../../testUtils";
import Profile from "./profile";

const ui = {
  pageTitle: byText(/Logs/),
};

test("ユーザーがログインしているケースで、ユーザーは自分の書いた読書ログの一覧を見ることができる", async () => {
  render(<Profile />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
