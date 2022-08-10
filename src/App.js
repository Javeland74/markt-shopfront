import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import BizSignIn from "./pages/BizSignIn/BizSignIn";
import NotFound from "./pages/NotFound";
import Title from "./components/Title";
import BizButton from "./components/BizButton";
import { useState } from "react";



function App() {

  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className='header-top'>
          <Title />
          <BizButton />
          {/* <button onClick={() => setLogin(!login)}>{login ? "Sign Out" : "Business Sign In"} </button>*/}
        </div>
        <div className='header-nav'>
          <Header />
        </div>
        <section className='main-section'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            {/* {login ? <About /> : <Redirect to="/" />} */}
            {/* </Route> */}
            <Route path='/SignUp' component={SignUp} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/BizSignIn' component={BizSignIn} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
