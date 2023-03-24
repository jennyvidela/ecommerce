import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
      <>
      <NavBar/>
      <Routes>
         <Route exact path='/' element={< Home/>}/>
         <Route exact path='/category/:id' element={< ItemListContainer/>}/>
         <Route exact path='/item/:id' element={< ItemDetail/>}/>
      </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
