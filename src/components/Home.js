import React from 'react'
// import { Card, Image, Segment, Grid} from 'semantic-ui-react'

function Home() {
  return (
    <div className='homeCard'>
      <p className='home-introduction'>
        CRUD GAME <br/><br/>
        This app was inspired by Hearthstone, and while it lacks many features that hearthstone has <br/>
        it serves as a frontend to demo our more robust full CRUD backend made with Ruby, ActiveRecord, <br/> 
        and Sinatra!<br/>
        <br/>
        Feel free to take a look around at all the features, as well as our source code for the: <br/><br/>
        backend @ <a href="url">https://github.com/Garret-Gallant/Phase-3-Project-Backend</a><br/>
        frontend @ <a href="url">https://github.com/ZionMiller/phase-3-project-front-end-/tree/zion</a><br/>
        <br/>
        Thank you for taking a look at our app! <br/>
        <br/>
        If you'd like more information about any of the dev's or would like to contact us, that can be found on the about page
      </p>
    </div>
  )
}

export default Home