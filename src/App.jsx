import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Loader />
        <div className="container m-t-30px">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
