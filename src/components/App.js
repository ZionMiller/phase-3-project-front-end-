import React, { useEffect, useState } from "react";

function App() {

    const [gameCards, setGameCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cards')
        .then(res => res.json())
        .then((gameCards) => setGameCards(gameCards))
    }, [])
}

export default App;