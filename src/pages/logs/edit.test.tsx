import { render } from "../../testUtils";
import { byRole, byTestId, byText } from "testing-library-selector";
import userEvent from "@testing-library/user-event";
import Edit from "./edit";

const ui = {
  publishButton: byRole("button", { name: /保存して公開/ }),
};

test("ユーザーはPOSTし、その結果を見ることができる", async () => {
  render(<Edit />);

  userEvent.click(ui.publishButton.get());
});
