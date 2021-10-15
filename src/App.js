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

function App() {


  return (
    <>
    <BrowserRouter>

        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          
          <Route exact path="/productos/:categoryId">
            <h1>Productos</h1>
            <ItemListContainer />
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/contacto">
            <h1>Contacto</h1>
          </Route>

          <Route exact path="/cart">
            {/* TODO: Pagina Carrito*/}
            <h1>Carrito</h1>
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>

    </BrowserRouter>
    </>
  );
}

export default App;
