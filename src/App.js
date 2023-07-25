
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import Description from './Components/AnnonceDescription/Description';
import AnnoncePage from './Components/Annonces/AnnoncesPage';
import BrouillonPage from './Components/BrouiilonPage/BrouillonPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AjouteAnnonce from './Components/AjouteAnnonce/AjouteAnnonce';
import './App.css';
import Statistiques from './Components/Statistiques/Statistiques';
import HomePage from '../src/Components/Home/HomePage'

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/annonce" element={<AnnoncePage/>}/>
      <Route path="/brouillon" element={<BrouillonPage/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/statistiques" element={<Statistiques/>} />
      <Route path="/description" element={<Description/>} />
      <Route path="/ajouter" element={<AjouteAnnonce/>} />
    </Routes>
    </Router>
  
  );
}

export default App;
