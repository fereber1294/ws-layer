import LayerLogo from './assets/LayerLogo.png';
import './App.css';
import Header from './components/Header'

import{
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className="logo-container">
          <img src={LayerLogo} className="App-logo" alt="logo" />
          <div className="banner">
            {/* <div className="corner"></div> */}
            <div className="text-content">
              <p >
                Under construction
              </p>
            </div>
            <div className="corner"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
