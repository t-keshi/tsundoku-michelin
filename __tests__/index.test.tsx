import { byText } from 'testing-library-selector';
import { render } from '../src/testUtils';
import Home from '../src/pages/index';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  pageTitle: byText(/Books/),
};

test('本の一覧が正しく表示される', async () => {
  render(<Home />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
