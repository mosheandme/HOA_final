import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePgae/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import IssuesPage from './Pages/IssuesPage/IssuesPage';
import MessagesPage from './Pages/MessagesPage/MessagesPage';
import TenantsPage from './Pages/TenantsPage/TenantsPage';
import VotingPage from './Pages/VotingPage/VotingPage';
import HoaNavbar from './components/HoaNavbar/HoaNavbar';



function App() {
  return (
    <div >
      <HoaNavbar/>
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/login"><LoginPage /></Route>
          <Route exact path="/issues"><IssuesPage /></Route>
          <Route exact path="/messages"><MessagesPage /></Route>
          <Route exact path="/tenants"><TenantsPage /></Route>
          <Route exact path="/voting"><VotingPage /></Route>
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
