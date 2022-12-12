// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Classes from './pages/Classes';
import Error from './pages/Error';
import Nav from './pages/Nav';
import Trainers from './pages/Trainers';
import Page from './pages/Page';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/classes" component={Classes} />
          <Route path="/trainers" component={Trainers} />
          <Route path="/Contact" component={Contact} />
          <Route path="/page" component={Page} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
