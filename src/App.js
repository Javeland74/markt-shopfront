import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
// import Header from "./components/Header";
import Home from "./pages/LoggedOut/Home/Home";
import About from "./pages/LoggedOut/About/About";
import SignUp from "./pages/LoggedOut/SignUp/SignUp";
import SignIn from "./pages/LoggedOut/SignIn/SignIn";
import BizSignIn from "./pages/LoggedOut/BizSignIn/BizSignIn";
import NotFound from "./pages/NotFound";
import Title from "./components/Title";
import BizButton from "./components/BizButton";
import UserProfile from "./pages/UserSignedIn/components/UserProfile/UserProfile";
import UserFeed from "./pages/UserSignedIn/components/UserFeed/UserFeed";
import NewBizPost from "./pages/BusinessSignedIn/components/BizPost/NewBizPost";
import BizProfile from "./pages/BusinessSignedIn/components/BizProfile/BizProfile";
// import BusinessMap from './components/maps/BusinessLocator/BusinessMap';
import OneBizMap from './components/maps/OneBizMap';
import AllBizMap from './components/maps/AllBizMap';
// import UserSignedIn from './pages/UserSignedIn/UserSignedIn';
// import BusinessSignedIn from './pages/BusinessSignedIn/BusinessSignedIn';
// import BusinessLocator from './components/maps/BusinessLocator/BusinessLocator';
import { useState } from "react";



function App() {

  const [userLogin, setUserLogin] = useState(false);
  const [bizLogin, setBizLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className='header-top'>
          <Title />
          {/* {bizLogin = (false) ? <BizButton /> : null} */}
          <BizButton />
          {/* <button onClick={() => setLogin(!login)}>{login ? "Sign Out" : "Business Sign In"} </button> */}
        </div>
        <div className='header-nav'>
          {/* <Header /> */}
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
          </Switch>
        </section>
        {/* {userLogin ? <UserSignedIn />}
        {bizLogin ? <BusinessSignedIn />} */}
        {/* <Route path='/Logout' component={LoggedOut} /> */}
        <Route path='/Profile' component={UserProfile} />
        <Route path='/Feed' component={UserFeed} />
        {/* // <Route component={NotFound} /> */}
        {/* LOGGED IN AS BUSINESS ROUTES */}
        {/* {/* // <Route path='/Logout' component={LoggedOut} /> */}
        <Route path='/BizProfile' component={BizProfile} />
        <Route path='/NewPost' component={NewBizPost} />
        {/* // <Route component={NotFound} /> */}

      </div>
    </BrowserRouter>
  );
}



export default App;
