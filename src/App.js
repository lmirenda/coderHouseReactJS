import { NavBar } from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer.js'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './componentes/CartScreen/Cart';
import { UIProvider } from './context/UIContext';
import { Checkout } from './componentes/Checkout/Checkout';


function App() {


  return (
    <>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>

              <NavBar />
              <Switch>
                <Route exact path="/">
                  <ItemListContainer />
                </Route>
                
                <Route exact path="/productos/:categoryId">
                  <ItemListContainer />
                </Route>

                <Route exact path="/detail/:itemId">
                  <ItemDetailContainer/>
                </Route>

                <Route exact path="/contacto">
                </Route>

                <Route exact path="/cart">
                  <Cart/>
                </Route>

                <Route exact path="/checkout">
                  <Checkout/>
                </Route>

                <Route path="*">
                  <Redirect to="/"/>
                </Route>
              </Switch>

          </BrowserRouter>
        </CartProvider>
      </UIProvider>
      
    </>
  );
}

export default App;
