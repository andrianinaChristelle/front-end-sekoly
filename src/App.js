
import Homepage from './component/Homepage';
import Account from './pages/users/Account';
import Login from './pages/users/Login';
import Profile from './pages/users/Profile';
import Navbar from './component/Navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { hasAuthenticated } from './services/AuthAp';
import Auth from './contexts/Auth';
import AuthenticatedRoute from './component/AuthenticatedRoute';
import ListeFiliere from './pages/Filiere/ListeFiliere';
import NouveauFiliere from './pages/Filiere/NouveauFiliere';
import NiveauFiliere from './pages/Filiere/NiveauFiliere';
import ListeEleveFiliere from './pages/Filiere/ListeEleveFiliere';
import InsertEleve from './pages/Economa/InsertEleve';
import ListeEleveEconoma from './pages/Economa/ListeEleveEconoma';
import LeftMenu from './component/LeftMenu';
import ListeEleve from './pages/Eleve/ListeEleve';
import FicheEleve from './pages/Eleve/FicheEleve';
import InsertFamille from './pages/Economa/InsertFamille';
import ListeMatiere from './pages/Filiere/ListeMatiere';
import InsertFiliereEleve from './pages/Economa/InsertFiliereEleve';
import DetailFamille from './pages/Eleve/DetailFamille';
import listeEnseignant from './pages/Enseignant/ListeEnseignant';
import FicheEnseignant from './pages/Enseignant/FicheEnseignant';
import MatiereEnseignant from './pages/Enseignant/MatiereEnseignant';
import Agenda from './pages/Statistique/Agenda';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <>
      <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter forceRefresh={true}>
          <Navbar />
          <LeftMenu />
          <div className="container-fluid">

            <Switch>
              <Route exact path='/login' component={Login} ></Route>
              {/* <Route exact path='/' component={Homepage} > <Homepage /></Route> */}

              <Route exact path='/profile' component={Profile} ></Route>
              {/* <Route exact path='/Listefiliere' component={ListeFiliere} ></Route> */}
              {/* <Route exact path='/NouveauFiliere' component={NouveauFiliere} ></Route> */}
              {/* <Route exact path='/listeNiveau' component={NiveauFiliere} ></Route> */}
              {/* <Route exact path='/ListeEleveFiliere' component={ListeEleveFiliere} ></Route> */}
              {/* <Route exact path='/InsertEleve' component={InsertEleve} ></Route> */}
              {/* <Route exact path='/ListeEleveEconoma' component={ListeEleveEconoma} ></Route> */}

              <AuthenticatedRoute path='/Listefiliere' component={ListeFiliere}></AuthenticatedRoute>
              <AuthenticatedRoute path='/listeNiveau' component={NiveauFiliere}></AuthenticatedRoute>
              <AuthenticatedRoute path='/NouveauFiliere' component={NouveauFiliere}></AuthenticatedRoute>F
              <AuthenticatedRoute path='/ListeEleveFiliere' component={ListeEleveFiliere}></AuthenticatedRoute>
              <AuthenticatedRoute path='/ListeMatiere' component={ListeMatiere}></AuthenticatedRoute>

              <AuthenticatedRoute path='/ListeEleve' component={ListeEleve}></AuthenticatedRoute>
              <AuthenticatedRoute path='/FicheEleve' component={FicheEleve}></AuthenticatedRoute>
              <AuthenticatedRoute path='/DetailFamille' component={DetailFamille}></AuthenticatedRoute>

              <AuthenticatedRoute path='/ListeEleveEconoma' component={ListeEleveEconoma}></AuthenticatedRoute>
              <AuthenticatedRoute path='/InsertEleve' component={InsertEleve}></AuthenticatedRoute>
              <AuthenticatedRoute path='/InsertFamille' component={InsertFamille}></AuthenticatedRoute>
              <AuthenticatedRoute path='/InscriptionEleve/:id' component={InsertFiliereEleve}></AuthenticatedRoute>

              <AuthenticatedRoute path='/ListeEnseignant' component={listeEnseignant}></AuthenticatedRoute>
              <AuthenticatedRoute path='/FicheEnseignant' component={FicheEnseignant}></AuthenticatedRoute>
              <AuthenticatedRoute path='/MatiereEnseignant' component={MatiereEnseignant}></AuthenticatedRoute>

              <AuthenticatedRoute path='/Agenda' component={Agenda}></AuthenticatedRoute>

              <AuthenticatedRoute path='/' component={Homepage}></AuthenticatedRoute>
              <AuthenticatedRoute path='/account' component={Account}></AuthenticatedRoute>
              <AuthenticatedRoute path='/profile' component={Profile}></AuthenticatedRoute>
            </Switch>
          </div>
        </BrowserRouter>
      </Auth.Provider>
    </>
  );
}

export default App;
