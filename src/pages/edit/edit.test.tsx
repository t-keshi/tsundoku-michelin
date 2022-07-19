import { byRole } from "testing-library-selector";
import userEvent from "@testing-library/user-event";
import { render } from "../../testUtils";
import EditPage from "./[bookId]";

const ui = {
  publishButton: byRole("button", { name: /保存して公開/ }),
};

test("ユーザーはPOSTし、その結果を見ることができる", async () => {
  render(<EditPage fallback={{}} />);

  userEvent.click(ui.publishButton.get());
});
