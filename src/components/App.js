import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar"
import CardCollection from "./CardCollection"

function App() {
// lsof -i -sTCP:LISTEN

    const [gameCards, setGameCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/cards')
        .then(res => res.json())
        .then((gameCards) => setGameCards(gameCards))
    }, [])

    console.log(gameCards)

    return (
    <div>
        <NavBar />

        <Route exact path="/">
            {/* <>home</> */}
        </Route>
        <Route path='/play'>
            <CardCollection gameCards={gameCards}/>
        </Route>
        <Route path='/add-card'>
            {/* add card */}
        </Route>
        <Route path='/about'>
            {/* about devs */}
        </Route>
    </div>
    )
}

export default App;