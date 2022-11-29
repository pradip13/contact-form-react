import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Home from './components/Home';
import Registered from './components/Registered';
import { Routes, Route } from "react-router-dom";


const App =()=> {
  return (
    <>
    <Header />

    <Routes>
    <Route exact path='/' element={<Home />}></Route>
    <Route exact path='/register' element={ <Registered />}></Route>

    </Routes>

   

  </>
  );
}

export default App;
