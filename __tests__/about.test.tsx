import { byRole, byTestId } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { render } from '../src/testUtils';
import About from '../src/pages/about';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  loginButton: byRole('button', { name: /Log in/ }),
  googleLoginButton: byTestId(/Login with Google/),
};

test('ユーザーがログインしていないケースで、ユーザーはログインすることができる', async () => {
  render(<About />);

  userEvent.click(ui.loginButton.get());
  userEvent.click(ui.googleLoginButton.get());
});
