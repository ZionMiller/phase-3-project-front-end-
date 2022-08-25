import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import NewCardForm from "./NewCardForm"
import CardCollection from "./CardCollection"
import PlayGame from "./PlayGame";


function App() {
// lsof -i -sTCP:LISTEN

    const [gameCards, setGameCards] = useState([])
    const [cardId, setCardId] = useState(0)

    useEffect(() => {
        fetch('http://localhost:9292/cards')
        .then(res => res.json())
        .then((gameCards) => setGameCards(gameCards))
    }, [])

    return (
    <div>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/play-game" element={<PlayGame />}>
            </Route>
            <Route path='/the-deck' element={<CardCollection gameCards={gameCards} />}>
            </Route>
            <Route path='/add-card' element={<NewCardForm />} >
            </Route>
            <Route path='/about' element={<About />}>
            </Route>
        </Routes>
    </div>
    )
}

export default App;