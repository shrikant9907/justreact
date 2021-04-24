import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import Home from './layouts/home/Home';
import Features from './layouts/features/Features';
import NavSidebar from './components/nav-sidebar/NavSidebar';

const appName = process.env.REACT_APP_NAME;

function App() {
  return (
    <BrowserRouter>
      <div className="react-app">
      <NavSidebar />
      <div className="app-content">
        {appName}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/features">
            <Features />
          </Route>
        </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
