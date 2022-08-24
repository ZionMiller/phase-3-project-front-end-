import React from 'react'
import GameCardDisplay from './GameCardDisplay'

function CardCollection( {gameCards} ) {
  return (
    <div className='cards'>
        {gameCards.map((gameCard) => (
            <GameCardDisplay
                gameCard={gameCard}
            />
            )
        )}
    </div>
  )
}

export default CardCollection

