import { byTestId } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { render } from '../src/testUtils';
import Search from '../src/pages/search';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  searchInput: byTestId('search'),
};

test('ユーザーは本を検索することができる', async () => {
  render(<Search />);

  userEvent.type(ui.searchInput.get(), 'hoge');
});
