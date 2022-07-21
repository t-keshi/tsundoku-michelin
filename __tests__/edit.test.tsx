import { byRole } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { render } from '../src/testUtils';
import EditPage from '../src/pages/edit/[bookId]';
import '@testing-library/jest-dom/extend-expect';

const ui = {
  publishButton: byRole('button', { name: /保存して公開/ }),
};

test('ユーザーはPOSTし、その結果を見ることができる', async () => {
  render(<EditPage fallback={{}} />);

  userEvent.click(ui.publishButton.get());
});
