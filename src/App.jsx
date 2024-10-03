import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterConfig from './RouterConfig';
import './sass/main.scss';

function App() {
  return (
    <>
      <Header />
        <main>
          <RouterConfig />
        </main>
      <Footer />
    </>
  );
}

export default App;