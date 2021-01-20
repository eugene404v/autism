import './App.css';

import { Link } from 'react-router-dom';
import Routes from './Routes.jsx'


function App() {
  return (
    <div className="App">
      <Routes />
      <Link to='/testing/instruction'>ТЕСТ</Link> <br/>
      <Link to='/login'>LOGIN</Link> <br/>
      <Link to='/signup'>SIGNUP</Link> <br/>
      <Link to='/doctor'>DOCTOR</Link> <br/>
    </div>
  );
}

export default App;
