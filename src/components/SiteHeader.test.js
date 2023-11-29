import { render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SiteHeader from './SiteHeader';


describe('The SiteHeader component', () => {

  const mockOnNavSelect = jest
    .fn()
    .mockImplementation((x) => { console.log(x); })
    .mockName('mockOnNavSelect');

  test('Clicking the Logo should make one navigation call to "home"', async () => {
    // Arrange
    render(<SiteHeader onNavSelect={mockOnNavSelect}/>);

    // Act
    screen.getByTestId("home-link").click();

    // Assert
    expect(mockOnNavSelect).toHaveBeenCalledTimes(1);
    expect(mockOnNavSelect).toHaveBeenCalledWith('home');
  });

  test('Clicking the About link should make one navigation call to "about"', async () => {
    // Arrange
    render(<SiteHeader onNavSelect={mockOnNavSelect}/>);

    // Act
    act(() => {
      screen.getByTestId("about-link").click();
    }) 

    // Assert
    expect(mockOnNavSelect).toHaveBeenCalledTimes(1);
    expect(mockOnNavSelect).toHaveBeenCalledWith('about');
  });

  test('Clicking the Blogs link should make one navigation call to "blogs"', async () => {
    // Arrange
    render(<SiteHeader onNavSelect={mockOnNavSelect}/>);

    // Act
    act(() => {
      screen.getByTestId("blogs-link").click();
    }) 

    // Assert
    expect(mockOnNavSelect).toHaveBeenCalledTimes(1);
    expect(mockOnNavSelect).toHaveBeenCalledWith('blogs');
  });
});