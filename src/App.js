import './App.css';
import Navbar from './Navbars/Navbar';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Studio from './buttons/Studio';
import View from './buttons/View';
import $ from 'jquery';
function App() {
  return (
    <Router>
           <Navbar/>
           <Switch>
              <Route path="/view" exact component={View} />
              <Route path="" exact component={Studio}/>
           </Switch>
    </Router>
  );
}

export default App;

// jquery 
$(document).on('click', '.btn-view',function(){
  $(this).addClass('active').siblings().removeClass('active');
});