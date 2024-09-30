import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterConfig from './RouterConfig';
import './sass/main.scss';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
        <main>
          <RouterConfig />
        </main>
      <Footer />
    </Fragment>
  );
}

export default App;