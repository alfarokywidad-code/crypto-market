
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./components/hero";
import { motion } from "motion/react";
function Home() {

    const navigate = useNavigate();
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        // !1. Fetch data
        fetch("https://api.coinlore.net/api/tickers/")
            .then(response => response.json())
            .then(data => { setCoins(data.data); })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function refreshCoins() {

        fetch("https://api.coinlore.net/api/tickers/")
            .then(response => response.json())
            .then(data => {
                setCoins(data.data);
            })

            .catch(error => {
                console.log(error);
            });

    }
    let sortedCoins = [...coins];
    // !4. Sort
    if (sort === "high") {
        sortedCoins.sort((a, b) => {
            return Number(b.price_usd) - Number(a.price_usd);
        });
    }
    else if (sort === "low") {
        sortedCoins.sort((a, b) => {
            return Number(a.price_usd) - Number(b.price_usd);
        });

    }
    else if (sort === "market") {
        sortedCoins.sort((a, b) => {
            return Number(b.market_cap_usd) - Number(a.market_cap_usd);
        });

    }



    return (
        <>
            <Hero />
            <div className="dashboard">
                <h1>Crypto Market Dashboard</h1>

                <div className="controls">

                    <motion.button onClick={refreshCoins}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}>
                        Refresh
                    </motion.button>

                    {/* 3. Search */}
                    <input
                        type="text"
                        placeholder="Search coin..."
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    {/* 4. Sort */}
                    <button onClick={() => setSort("high")}>
                        Highest price
                    </button>
                    <button onClick={() => setSort("low")}>
                        Lowest Price
                    </button>
                    <button onClick={() => setSort("market")}>
                        Highest Market Cap
                    </button>

                </div>

                {/* 2. Display cryptocurrencies and Search*/}
                <div className="coins-grid">

                    {sortedCoins.filter(coin =>
                        coin.name.toLowerCase().includes(search.toLowerCase()) ||
                        coin.symbol.toLowerCase().includes(search.toLowerCase())
                    ).slice(0, 20).map(coin => (
                        <div className="coin-card" key={coin.id}>
                            <h3>{coin.name}</h3>
                            <p>Symbol: {coin.symbol}</p>
                            <p>Rank: {coin.rank}</p>
                            <p>Price: ${coin.price_usd}</p>
                            <p>24h Change: {coin.percent_change_24h}%</p>

                            <button onClick={() => navigate("/details/" + coin.id)}>
                                View Details
                            </button>
                        </div>


                    ))}

                </div>

            </div>
        </>
    );
}
export default Home;
