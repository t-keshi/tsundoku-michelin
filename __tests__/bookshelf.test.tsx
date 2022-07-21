import { byText } from 'testing-library-selector';
import { render } from '../src/testUtils';
import BookshelfPage from '../src/pages/me/bookshelf';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  pageTitle: byText(/Bookshelf/),
};

test('My 本棚の本が表示される', async () => {
  render(<BookshelfPage />);

  expect(ui.pageTitle.get()).toBeInTheDocument();
});
