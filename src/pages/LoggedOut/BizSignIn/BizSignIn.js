import { Link } from 'react-router-dom';

const BizSignIn = () => {
    return (
        <>
            <h1>
                Business Sign-in Page
            </h1>

            <form name='business-signin' action='/action_page.php' onsubmit='return validateBusinessLogin()'>
                <ul>
                    <li>
                        <input type="text" id='businessUser-signin' name='businessUser-signin' placeholder="Email:">
                        </input>
                    </li>
                    <li>
                        <input type="password" id='businesspw-signin' name='businesspw-signin' placeholder="Password:">
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

export default BizSignIn