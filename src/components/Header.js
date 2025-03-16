import { useState } from "react";
import logo from "../../assets/logo.webp";

const Header = () => {
    const [login, setLogin] = useState('Login')

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-container" src={logo} alt="abc" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
            <button className="login-btn" onClick={()=> {login === 'Login' ? setLogin('Logout') : setLogin('Login')}}>{login}</button>
        </div>
    );
};

export default Header