import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div className="Header-SiteName">
                <p className="Header-LogoType">State of DisDress</p>
                <p className="Header-Tagline Mono">sartorial musings</p>
            </div>
            <button
                className="Header-MenuButton"
                href="localhost:3000"
            ></button>
        </div>
    );
}

export default Header;
