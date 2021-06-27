import './App.css';
import Home from './Home/Home'; 
import Header from './Header/Header'; 
import Footer from './Footer/Footer'; 
import StayDetails from './StayDetails/StayDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import SearchPage from './SearchPage/SearchPage'; 



function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/search/:id" component={StayDetails} />
          <Route exact path="/search" component={SearchPage}/>
          <Route exact path="/" component={Home}/>      
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
