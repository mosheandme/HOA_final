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
import MessageModel from './model/MessageModel';
import jsonUsers from './data/Users.json';
import jsonMessages from './data/Messages.json';



function App() {
  const [users, setUsers] = useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
  const [messages, setMessages] = useState(jsonMessages.map(plainMessage => new MessageModel(plainMessage)));
  const [activeUser, setActiveUser] = useState();


  const updateMessages = (newMsg) => {
    let newMessages = [...messages];
    newMessages.push(new MessageModel(newMsg));
    setMessages(newMessages)
  }
  function createTenant(fname, lname, email, apartment, pwd) {
    const NewTenant = new UserModel(
      {
        fname,
        lname,
        email,
        apartment,
        pwd
      }
    );
    setUsers(users.concat(NewTenant));

  }
  return (
    <div >
      <HoaNavbar activeUser={activeUser} onLogout={() => setActiveUser()} />
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={activeUser => setActiveUser(activeUser)} /></Route>
          <Route exact path="/issues"><IssuesPage activeUser={activeUser} /></Route>
          <Route exact path="/messages"><MessagesPage messages={messages} activeUser={activeUser} updateMessages={updateMessages} /></Route>
          <Route exact path="/tenants"><TenantsPage users={users} activeUser={activeUser} onNewTenant={createTenant} /></Route>
          <Route exact path="/voting"><VotingPage activeUser={activeUser} /></Route>
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
