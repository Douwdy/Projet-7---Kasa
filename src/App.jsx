import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './components/Index';
import './sass/main.scss';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
      <Index/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
