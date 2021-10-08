import { NavBar } from './componentes/NavBar/NavBar';
//import { HomeView } from './componentes/HomeView/HomeView.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer.js'

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
