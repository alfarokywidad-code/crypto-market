import { useNavigate } from "react-router-dom";
import"./header.css";
function Header() {

    const navigate = useNavigate();
    return (
        <header className="header">

            <h2 onClick={() => navigate("/")}>
                <span>₿</span> Crypto<span className="logo-light">Pulse</span>
            </h2>

            <nav>
            
                <button onClick={() => navigate("/")}>
                    Dashboard
                </button>
            </nav>

            <div className="header-status">
                <span className="status-dot"></span>
                Live Market
            </div>

        </header>
    );
}

export default Header;
