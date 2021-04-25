import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import Home from './layouts/home/Home';
import Gallery from './layouts/gallery/Gallery';
import NavSidebar from './components/nav-sidebar/NavSidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
        
function App() {
  return (
    <BrowserRouter>
      <div className="react-app">
        <NavSidebar />
        <Header />
        <div className="app-content">
         <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
