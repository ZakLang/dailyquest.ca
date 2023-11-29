import SiteBodyHomePage from './SiteBodyHomePage';
import SiteBodyAboutPage from './SiteBodyAboutPage';
import SiteBodyBlogsPage from './SiteBodyBlogsPage';

function SiteBody(props) {
  let activePage;
  switch ((props && props.activeBodyPage) ? props.activeBodyPage : 'home') {
    case 'home':
      activePage = SiteBodyHomePage();
      break;
    case 'about':
      activePage = SiteBodyAboutPage();
      break;
    case 'blogs':
      activePage = SiteBodyBlogsPage();
      break;
    default:
      activePage = SiteBodyHomePage();
      break;
  }

  return (
    <main data-testid="site-body">
      {activePage}
    </main>
  )
}

export default SiteBody;