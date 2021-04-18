import Navbar from './components/navbar';
import Home from './views/home';
import About from './views/about';
import Bookmarks from './views/bookmarks';
import Explore from './views/explore';
import MyProducts from './views/myProducts';
import Requests from './views/requestedList';
import Queries from './views/queriesAndComplaints';
import History from './views/transactionHistory';
import './stylesheets/home.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/myProducts">
            <MyProducts />
          </Route>
          <Route exact path="/requestedList">
            <Requests />
          </Route>
          <Route exact path="/queriesAndComplaints">
            <Queries />
          </Route>
          <Route exact path="/transactionHistory">
            <History />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
