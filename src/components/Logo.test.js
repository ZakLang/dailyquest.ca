import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('The Logo component', () => {

  test('renders the image', () => {
    render(<Logo />);
    const testImage = screen.getByTestId("logo-image");
    expect(testImage).toHaveAttribute("src", "images/dailyquest-logo.png");
    expect(testImage.alt).toContain("Daily Quest Logo");
    expect(testImage).toBeInTheDocument();
  });
  
  test('renders the text', () => {
    render(<Logo />);
    const testText = screen.getByTestId("logo-text");
    expect(testText.textContent).toContain("Daily Quest");
    expect(testText).toBeInTheDocument();
  });
});
