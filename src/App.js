import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Cart } from './components/Cart/Cart';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartProvider';


function App() {
  return (
   
      <CartProvider>
      <BrowserRouter> 
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
      <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    
  );
}


export default App;
