
import { useNavigate } from "react-router-dom";
import "./hero.css"

function Hero() {

    const navigate = useNavigate();

    return (
        <section className="hero"
        >
            <div className="hero-content">

                <span className="hero-badge">
                    ✦ Welcome to CryptoPulse
                </span>

                <h1>
                    Explore The World Of
                    <span> Cryptocurrency</span>
                </h1>

                <p>
                    Track crypto prices, discover market trends,
                    and stay updated with the latest cryptocurrency data.
                </p>

                <div className="hero-buttons">

                    <button onClick={() => navigate("/#market")}>
                        Explore Market
                    </button>

                    <button className="hero-secondary"
                        onClick={() => navigate("/details/90")}>
                        Discover More
                    </button>

                </div>

                <div className="hero-stats">

                    <div>
                        <h3>20+</h3>
                        <p>Cryptocurrencies</p>
                    </div>

                    <div>
                        <h3>24/7</h3>
                        <p>Market Tracking</p>
                    </div>

                    <div>
                        <h3>Live</h3>
                        <p>Market Updates</p>
                    </div>

                </div>

            </div>

            <div className="hero-visual">

                <div className="hero-circle">
                    <span>₿</span>
                </div>

                <div className="floating-card card-one">
                    <span>₿</span>
                    <div>
                        <h4>Bitcoin</h4>
                        <p>BTC</p>
                    </div>
                </div>

                <div className="floating-card card-two">
                    <span>Ξ</span>
                    <div>
                        <h4>Ethereum</h4>
                        <p>ETH</p>
                    </div>
                </div>

                <div className="floating-card card-three">
                    <span>↗</span>
                    <div>
                        <h4>Market Growth</h4>
                        <p>Crypto Market</p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Hero;
