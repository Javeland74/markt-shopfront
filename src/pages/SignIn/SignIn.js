import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <>
            <h1>
                Sign-in Page
            </h1>
            <form name='user-signin' action='/action_page.php' onsubmit='return validateUserLogin()'>
                <ul>
                    <li>
                        <input type="text" id='username-signin' name='username-signin' placeholder="Username:">
                        </input>
                    </li>
                    <li>
                        <input type="password" id='userpw-signin' name='userpw-signin' placeholder="Password:">
                        </input>
                    </li>
                    <li>
                        <Link to="/">Forgot Password?</Link>
                    </li>
                    <li className='sign-in__sumbit-btn btn'>
                        <button type="submit">
                            Sign In
                        </button>
                    </li>
                </ul>
            </form>
        </>
    )
}

export default SignIn