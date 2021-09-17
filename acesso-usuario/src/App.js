import { members } from "./members";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Customer from "./components/Pages/customer";
import Company from "./components/Pages/company";
import Home from "./components/Pages/home";
import { useState } from "react";

function App() {
  const [listMembers, setListMembers] = useState(members);
  console.log(listMembers);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={listMembers} setListMembers={setListMembers} />
          </Route>
          <Route exact path="/customer/:id">
            <Customer members={listMembers} />
          </Route>
          <Route exact path="/company/:id">
            <Company members={listMembers} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
