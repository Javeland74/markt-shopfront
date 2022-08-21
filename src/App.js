import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Header from "./components/Header";
import Home from "./pages/LoggedOut/Home/Home";
import About from "./pages/LoggedOut/About/About";
import SignUp from "./pages/LoggedOut/SignUp/SignUp";
import SignIn from "./pages/LoggedOut/SignIn/SignIn";
import BizSignIn from "./pages/LoggedOut/BizSignIn/BizSignIn";
import NotFound from "./pages/NotFound";
import Title from "./components/Title";
import BizButton from "./components/BizButton";
// import BusinessMap from './components/maps/BusinessLocator/BusinessMap';
import OneBizMap from './components/maps/OneBizMap';
import AllBizMap from './components/maps/AllBizMap';
// import BusinessLocator from './components/maps/BusinessLocator/BusinessLocator';
// import { ChakraProvider } from "@chakra-ui/react";
// import { useState } from "react";



function App() {

  const [userLogin, setUserLogin] = useState(false);
  const [bizLogin, setBizLogin] = useState(false);


  return (
    <BrowserRouter>
      <div className="App">
        <div className='header-top'>
          <Title />
          <BizButton />
          {/* <button onClick={() => setLogin(!login)}>{login ? "Sign Out" : "Business Sign In"} </button> */}
        </div>
        <div className='header-nav'>
          <Header />
        </div>
        <section className='main-section'>
          <Switch>
            {/* LOGGED OUT ROUTES */}
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            {/* {login ? <About /> : <Redirect to="/" />} */}
            {/* </Route> */}
            <Route path='/SignUp' component={SignUp} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/BizSignIn' component={BizSignIn} />
            {/* <Route path='/Map' component={Map} /> */}
            <Route path='/ThisBusiness' exact component={OneBizMap} />
            <Route path='/AllBusinesses' exact component={AllBizMap} />
            <Route component={NotFound} />
            {/* LOGGED IN AS USER ROUTES */}
            <Route path='/Logout' component={LoggedOut} />
            <Route path='/MyProfile' component={UserProfile} />
            <Route path='/MyFeed' component={UserFeed} />
            <Route component={NotFound} />
            {/* LOGGED IN AS BUSINESS ROUTES */}
            <Route path='/Logout' component={LoggedOut} />
            <Route path='/MyProfile' component={BizProfile} />
            <Route path='/MyFeed' component={NewBizPost} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}



export default App;
