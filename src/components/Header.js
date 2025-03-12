import logo from "../../assets/logo.webp";


const Header = () => {
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
        </div>
    );
};

export default Header