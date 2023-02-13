import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
