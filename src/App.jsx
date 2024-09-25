import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Logements from './components/Thumbnail';
import logementsData from './logements.json';
import './sass/main.scss';
import illustration from './assets/paysage1.png';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
      <div className='banner'>
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        <img src={illustration} alt='paysage' className='banner-illustration'/>
      </div>
      <section className='logements'>
      <Logements logementsData={logementsData}/>
      </section>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
