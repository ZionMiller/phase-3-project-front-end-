import React from 'react'
import { Card, Image, Segment, Grid} from 'semantic-ui-react'

function Home() {
  return (
    <div className='homeCard'>
      <h1 id="welcome-to">Welcome to our P3 project</h1>
      <Image.Group size='tiny' spaced='left'>
      </Image.Group>
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment raised>Our Content Available for MacOS, Windows, Linux, and VS Code</Segment>
        </Grid.Column>
        <br />
      </Grid>
      <div id="developer-cards">
        <h1 id="meet-developers">Our Developers:</h1>
        <Card.Group itemsPerRow={3}>
        <Card>
          <Image src='https://www.ctvnews.ca/polopoly_fs/1.2842838.1459624452!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Garret Galant</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Garret Galant is a fullstack enggineer from Colorado.
            </Card.Description>
          </Card.Content>
        </Card>
        </Card.Group>
      </div>
    </div>
  )
}

export default Home