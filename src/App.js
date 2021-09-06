import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Reviews from './Components/Reviews';
import SingleReview from './Components/SingleReview';
import Users from './Components/Users';
import '@fontsource/roboto';
function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <Router>
      <div className="App">
        <header className="headerAndNavBar">
          <Header />
          <Nav className="navBar" />
        </header>
        <Switch>
          <Route path="/" exact>
            <Reviews reviews={reviews} setReviews={setReviews} />
          </Route>
          <Route path="/categories/:category" exact>
            <Reviews reviews={reviews} setReviews={setReviews} />
          </Route>
          <Route path="/reviews/:review_id" exact>
            <SingleReview />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
