import '../SignUp/SignUp.scss';

const SignUp = () => {
    return (
        <>
            <h1>
                Sign-Up Page
            </h1>
            <h2>
                I am a...
            </h2>
            <section className="sign-up">
                <div className="sign-up__form">
                    <form name="user-signup" action='/action_page.php' onsubmit="return validateNewUserForm()">
                        <h3>User</h3>
                        <ul className='sign-up__list-container'>
                            <li className='sign-up__prof-img-btn btn'>
                                <button type='upload'>
                                    Upload Profile Image
                                </button>
                            </li>
                            <li>
                                <label for='mail'>Email:</label>
                                <input type='email' id='mail' name='user-email'></input>
                            </li>
                            <li>
                                <label for='name'>Username:</label>
                                <input type='text' id='name' name="username"></input>
                            </li>
                            <li>
                                <label for='name'>Password:</label>
                                <input type='password' id='password' name="user-password"></input>
                            </li>
                            <li>
                                <label for='location'>Location:</label>
                                <input type='location' id='location' name="user-location"></input>
                            </li>
                            <li className='sign-up__sumbit-btn btn'>
                                <button type="submit">
                                    Create Profile
                                </button>
                            </li>
                        </ul>
                    </form >
                </div >
                <div className="sign-up__form">
                    <form name="business-signup" action='/action_page.php' onsubmit="return validateNewBusinessForm()">
                        <h3>Business</h3>
                        <ul className='sign-up__list-container'>
                            <li className='sign-up__prof-img-btn'>
                                <button type='upload'>
                                    Upload Profile Image
                                </button>
                            </li>
                            <li>
                                <label for='mail'>Email:</label>
                                <input type='email' id='mail' name='business-email'></input>
                            </li>
                            <li>
                                <label for='name'>Your Name:</label>
                                <input type='text' id='name' name="business-owner-name"></input>
                            </li>
                            <li>
                                <label for='name'>Business Name:</label>
                                <input type='text' id='name' name="business-name"></input>
                            </li>
                            <li>
                                <label for='name'>Password:</label>
                                <input type='text' id='password' name="business-password"></input>
                            </li>
                            <li>
                                <label for='biz-type'>Business Type:</label>
                                <select type='dropdown' id='biz-type' name="business-type"></select>
                            </li>
                            <li>
                                <label for='location'>Location:</label>
                                <input type='location' id='location' name="business-location"></input>
                            </li>
                            <li className='sign-up__sumbit-btn'>
                                <button type="submit">
                                    Sign Me Up
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </section >
        </>
    )
}

export default SignUp