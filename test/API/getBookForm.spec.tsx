import { getBookForm } from '../../src/lib/api/API';

describe('Check we get forms data', () => {
  test('Check if we have any form data', async () => {
    const formData = await getBookForm();
    expect(Object.prototype.hasOwnProperty.call(formData, 'sys')).toBeTruthy();
  });
});
