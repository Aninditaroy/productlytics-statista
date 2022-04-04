// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import NotFound from './Components/NotFound/NotFound';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;