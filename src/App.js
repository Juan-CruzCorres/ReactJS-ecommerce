import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import { ItemList } from './components/ItemList/ItemList';
import { Cart } from './components/Cart/Cart';
import './App.css';



function App() {
  return (
   <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
   </>
    
  );
}


export default App;
