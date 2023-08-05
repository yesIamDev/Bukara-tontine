import './App.css';
import {Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignupPage from './pages/signup';
import LoginPage from './pages/login';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <Router>
        <Switch>
          <Route path='/' component={LoginPage}/>
          <Route path='/signup' component={SignupPage}/>
        </Switch>
      </Router>
    </div>
  </div>
  );
}

export default App;

