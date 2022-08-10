import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav__btn">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav__btn">
                    <Link to="/SignUp">Sign Up</Link>
                </li>
                <li className="nav__btn">
                    <Link to="/SignIn">Sign In</Link>
                </li>
            </ul>
        </>
    );

}

export default Header