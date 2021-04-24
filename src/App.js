import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import Home from './layouts/home/Home';
import Features from './layouts/features/Features';
import NavSidebar from './components/nav-sidebar/NavSidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="react-app">
      <NavSidebar />
      <Header />
      <Footer />
      <div className="app-content">
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
