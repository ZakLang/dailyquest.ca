import SiteBodyHomePage from './SiteBodyHomePage';
import SiteBodyAboutPage from './SiteBodyAboutPage';
import SiteBodyBlogsPage from './SiteBodyBlogsPage';

function SiteBody(props) {

  const bodyStyle = {
    minHeight: "calc(100vh - 56px)",
    padding: "12px 0px 0px 0px"
  }

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
      <div className="content-width centered" style={bodyStyle}>
        {activePage}
      </div>
    </main>
  )
}

export default SiteBody;