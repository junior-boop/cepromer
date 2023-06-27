import logo from './logo.svg';
import styles from './App.module.css';
import { Routes, Route } from '@solidjs/router'
import Accueil from '../pages/accueil';
import NavBar from '../composants/navbar';
import Footer from '../composants/footer';
import Hygienes from '../pages/filieres/hyg_as';
import Hydraulique from '../pages/filieres/hyd_ru';
import Inscription from '../pages/inscription';
import ProductionV from '../pages/filieres/prod_veg';
import ProductionA from '../pages/filieres/prod_an';

function App() {
  return (
    <>
      <NavBar />
      <div class= {styles.vide}></div>
      <Routes>
        <Route path="/" component={Accueil} />
        <Route path="/filieres/hyg-as" component={Hygienes} />
        <Route path="/filieres/hyd-ru" component={Hydraulique} />
        <Route path="/filieres/prod-veg" component={ProductionV} />
        <Route path="/filieres/prod-an" component={ProductionA} />
        <Route path="/inscription" component={Inscription} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
