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
import { useState } from 'react';
import UserModel from './model/UserModel';
import jsonUsers from './data/Users.json';



function App() {
  const[users,setUsers]=useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setactiveUser] = useState(new UserModel({ fname: "Moshe", lname: "Batito", email: "moshe@moshe.com", apartment: "2", isCommitteeMember: "true", pwd: "123" }));
  
  return (
    <div >
      <HoaNavbar activeUser={activeUser} onLogout={() => setactiveUser(null)} />
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/login"><LoginPage users={users}/></Route>
          <Route exact path="/issues"><IssuesPage activeUser={activeUser} /></Route>
          <Route exact path="/messages"><MessagesPage activeUser={activeUser} /></Route>
          <Route exact path="/tenants"><TenantsPage activeUser={activeUser} /></Route>
          <Route exact path="/voting"><VotingPage activeUser={activeUser} /></Route>
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
