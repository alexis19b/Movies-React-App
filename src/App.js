import './App.css';
import { Header } from './components/header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from '@material-ui/core';
import { Trending } from './components/pages/Trending/Trending';
import { Movies } from './components/pages/Movies/Movies';
import { Series } from './components/pages/Series/Series';
import { Search } from './components/pages/Search/Search';


function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={ Trending } exact />
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
