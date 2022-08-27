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
import UserProfile from "./pages/UserSignedIn/components/UserProfile/UserProfile";
import UserFeed from "./pages/UserSignedIn/components/UserFeed/UserFeed";
import NewBizPost from "./pages/BusinessSignedIn/components/BizPost/NewBizPost";
import BizProfile from "./pages/BusinessSignedIn/components/BizProfile/BizProfile";
import BizProfileAsUser from './pages/UserSignedIn/components/BizProfileAsUser/BizProfileAsUser';
import OneBizMap from './components/maps/OneBizMap';
import AllBizMap from './components/maps/AllBizMap';
import { useState } from "react";



function App() {

  const [userLogin, setUserLogin] = useState(false);
  const [bizLogin, setBizLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInBiz, setLoggedInBiz] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <div className='header-top'>
          <Title />
          {!bizLogin && !userLogin ? <BizButton /> : null}
        </div>
        <div className='header-nav'>
          <Header
            userLogin={userLogin}
            bizLogin={bizLogin}
            setUserLogin={setUserLogin}
            setBizLogin={setBizLogin}
            loggedInBiz={loggedInBiz}
            loggedInUser={loggedInUser} />
        </div>
        <section className='main-section'>
          <Switch>
            {/* LOGGED OUT ROUTES */}
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/SignUp'>
              <SignUp
              />
            </Route>
            <Route path='/SignIn'>
              <SignIn
                setUserLogin={setUserLogin}
                setLoggedInUser={setLoggedInUser} />
            </Route>
            <Route path='/BizSignIn'>
              <BizSignIn
                setBizLogin={setBizLogin}
                setLoggedInBiz={setLoggedInBiz} />
            </Route>
            <Route path='/ThisBusiness' exact component={OneBizMap} />
            <Route path='/AllBusinesses' exact component={AllBizMap} />
            <Route path='/profile/:userid' component={UserProfile} />
            {/* USER ROUTES */}
            <Route path='/Logout' setLoggedInBiz={null} setLoggedInUser={null} >
              <Redirect to='/' />
            </Route>
            <Route path='/BizAsUser' component={BizProfileAsUser} />
            {/* BUSINESS ROUTES */}
            <Route path='/Feed'> <UserFeed loggedInUser={loggedInUser} /> </Route>
            <Route path='/BizProfile/:bizID' component={BizProfile} />
            <Route path='/addnew'> <NewBizPost loggedInBiz={loggedInBiz} />  </Route>
            <Route component={NotFound} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}



export default App;
