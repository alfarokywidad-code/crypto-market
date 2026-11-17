import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./details.css";
function Details() {

    const { id } = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(() => {

        fetch("https://api.coinlore.net/api/ticker/?id=" + id)
            .then(response => response.json())
            .then(data => {
                setCoin(data[0]);
            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);

    if (coin === null) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="details-page">

            <div className="details-card">

                <h1>{coin.name}</h1>
                <div className="details-info">
                    <p>Price: ${coin.price_usd}</p>
                    <p>Market Cap: ${coin.market_cap_usd}</p>
                    <p>Volume: ${coin.volume24}</p>
                    <p>24h Change: {coin.percent_change_24h}%</p>
                </div>

            </div>

        </div>
    );

}

export default Details;


