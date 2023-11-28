import { render, screen } from '@testing-library/react';
import SiteBody from './SiteBody';

jest.mock('./SiteBodyHomePage', () => () => <div data-testid="home-page"></div>);
jest.mock('./SiteBodyAboutPage', () => () => <div data-testid="about-page"></div>);
jest.mock('./SiteBodyBlogsPage', () => () => <div data-testid="blogs-page"></div>);

describe('The SiteBody component', () => {
  test('passing nothing should return the HomePage', () => {
    render(<SiteBody />);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
  test('passing an invalid value should return the HomePage', () => {
    render(<SiteBody activeBodyPage="123Fail"/>);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
  test('passing "home" should return the HomePage', () => {
    render(<SiteBody activeBodyPage="home" />);
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
  test('passing "about" should return the AboutPage', () => {
    render(<SiteBody activeBodyPage="about" />);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    expect(screen.queryByTestId("home-page")).not.toBeInTheDocument();
  });
  test('passing "blogs" should return the BlogsPage', () => {
    render(<SiteBody activeBodyPage="blogs" />);
    expect(screen.getByTestId("blogs-page")).toBeInTheDocument();
    expect(screen.queryByTestId("home-page")).not.toBeInTheDocument();
  });
});
