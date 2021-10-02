//import logo from './logo.svg';
//import './App.css';
import { NavBar } from './componentes/NavBar/NavBar';
import { HomeView } from './componentes/HomeView/HomeView.js'

function App() {
  console.log("APP");
  return (
    <div>
      <NavBar />
      <HomeView />
    </div>
  );
}

export default App;
