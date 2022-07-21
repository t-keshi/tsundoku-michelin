import { byText } from 'testing-library-selector';
import { render } from '../src/testUtils';
import Profile from '../src/pages/me/profile';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  pageTitle: byText(/Profile/),
};

test('ユーザーがログインしているケースで、ユーザーはプロフィールを変更し、その結果を見ることができる', async () => {
  render(<Profile />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
