import './App.css';
import { Nav, Popular, Slider, Advertising, Footer } from './components/import';

function App({ dataPopular }) {
  return (
    <div className="App">
      <Nav />
      <Slider />
      <Popular dataPopular={dataPopular} />
      <Advertising />
      <Footer />
    </div>
  );
}

export default App;
