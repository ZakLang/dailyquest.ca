import { render, screen } from '@testing-library/react';
import SiteHeader from './SiteHeader';

describe('The SiteHeader component', () => {
  const mockOnNavSelect = jest.fn(x => x);
  test('Clicking the About link should make one navigation call to "about"', () => {
    render(<SiteHeader onNavSelect={mockOnNavSelect}/>);

    const aboutLink = screen.getByTestId("about-link");
    console.log(aboutLink);
    aboutLink.click();

    expect(mockOnNavSelect).toHaveBeenCalledTimes(1);
    // expect(mockOnNavSelect).toHave.toBe('about');
  });
});