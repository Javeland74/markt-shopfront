import { BrowserRouter, Route, Switch } from "react-router-dom";
import './SignedIn.scss';
import './App.scss';
import Header from '../components/Header';
import NotFound from "../../pages/NotFound";
import Title from '../components/Title';
import LoggedOut from '../BusinessSignedIn/components/LoggedOut';
import UserFeed from './components/UserFeed/UserFeed';
import UserProfile from './components/UserProfile/UserProfile';

const UserSignedIn = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='header-top'>
                    <Title />
                </div>
                <div className='header-nav'>
                    <Header />
                </div>
                <section className='main-section'>
                    <Switch>
                        <Route path='/' component={LoggedOut} />
                        <Route path='/business-profile' component={UserFeed} />
                        <Route path='/add-post' component={UserProfile} />
                        <Route component={NotFound} />
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    )
}

export default UserSignedIn