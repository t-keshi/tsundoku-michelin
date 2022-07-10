import { render } from "../testUtils";
import About from "./about";
import { byRole, byTestId } from "testing-library-selector";
import userEvent from "@testing-library/user-event";

const ui = {
  loginButton: byRole("button", { name: /Log in/ }),
  googleLoginButton: byTestId(/Login with Google/),
};

test("ユーザーがログインしていないケースで、ユーザーはログインすることができる", async () => {
  render(<About />);

  userEvent.click(ui.loginButton.get());
  userEvent.click(ui.googleLoginButton.get());
});
