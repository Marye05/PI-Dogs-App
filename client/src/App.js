import './App.css';
import Home from "./views/HomePage/HomePage";
import Detail from "./views/DetailPage/DetailPage";
import Create from "./views/Create/Create";
import Landing from "./views/LandingPage/LandingPage"
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom"


function App() {
  // location es un hooks
    const location = useLocation();
  
    return ( 
      <div className="App">
        {location.pathname !== "/" && <NavBar /> }
        
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route exact path="/dogs/:id" component={Detail} />
        <Route exact path="/create" component={Create} />
        
            
      </div>
  );
}

export default App;
