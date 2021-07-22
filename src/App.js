import './App.css';
import Home from './Home/Home'; 
import Header from './Header/Header'; 
import Footer from './Footer/Footer'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import SearchPage from './SearchPage/SearchPage'; 
import StayDetailsContainer from './StayDetailsContainer/StayDetailsContainer';


function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/search/:id" component={StayDetailsContainer} />
          <Route exact path="/search" component={SearchPage}/>
          <Route exact path="/" component={Home}/>      
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


 