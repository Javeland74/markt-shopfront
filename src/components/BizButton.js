import { Link } from "react-router-dom";

const BizButton = () => {
    return (
        <Link to="/BizSignIn">
            <button className='biz-signin-btn'>Business Sign In</button>
        </Link>
    )
}

export default BizButton