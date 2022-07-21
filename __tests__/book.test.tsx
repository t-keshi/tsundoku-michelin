import { byRole } from 'testing-library-selector';
import { render } from '../src/testUtils';
import Book from '../src/pages/books/[bookId]';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  catchCopy: byRole('button', { name: /あなたの積読を、みんなの資産に。/ }),
};

test('本の詳細が正しく表示される', async () => {
  render(<Book />);

  expect(ui.catchCopy.get()).toBeInTheDocument();
});
