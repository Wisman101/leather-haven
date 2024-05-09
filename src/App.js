import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the Shop Page</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route 
          index
          element={ <Home />} 
        />
        <Route 
          path="shop"
          element={ <Shop />} 
        />
        <Route 
          path="signIn"
          element={ <SignIn />} 
        />
      </Route>
    </Routes>
  );
}

export default App;
