import { BrowserRouter, Route, Switch } from "react-router-dom";
import './SignedIn.scss';
import './App.scss';
import Header from '../components/Header';
import NotFound from "../../pages/NotFound";
import Title from '../components/Title';
import LoggedOut from './components/LoggedOut';
import BizProfile from './components/BizProfile/BizProfile';
import BizPost from './components/BizPost/BizPost';

function BizSignedIn() {
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
                        <Route path='/business-profile' component={BizProfile} />
                        <Route path='/add-post' component={BizPost} />
                        <Route component={NotFound} />
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    )
}

export default BusinessSignedIn