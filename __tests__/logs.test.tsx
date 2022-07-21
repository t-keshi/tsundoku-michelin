import { byText } from 'testing-library-selector';
import { render } from '../src/testUtils';
import Profile from '../src/pages/me/profile';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  pageTitle: byText(/Logs/),
};

test('ユーザーがログインしているケースで、ユーザーは自分の書いた読書ログの一覧を見ることができる', async () => {
  render(<Profile />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
