// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
         <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
    </div>
  );
}

export default App;
