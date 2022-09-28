import {useEffect, useState} from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    const [refresh, setRefresh] = useState(0)
    const onRefresh = () => {
        setLoading(true)
        setRefresh((prevState => prevState + 1))
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json)
                setLoading(false)
                try {
                    console.log(json[0].quotes.USD.price)
                } catch (e) {
                    console.error(e)
                }
            })
    }, [refresh])
    return (
        <div>
            <h1>Coin Tracker! {loading ? "" : `(${coins.length})`}</h1>
            <button onClick={onRefresh}>refresh</button>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <ul>
                    {coins.map((item, index) => {
                        return <li key={index}>{item.name} ({item.symbol}) : ${item.quotes.USD.price} USD</li>
                    })}
                </ul>
            )}

            <div>

            </div>
        </div>
    )
}

export default CoinTracker