import React from 'react'
import { Card, Image, Grid} from 'semantic-ui-react'

function About() {
  return (
    <div>
    <Image.Group size='tiny' spaced='left'>
      </Image.Group>
      <Grid centered columns={3}>
        <br />
      </Grid>
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
  )
}

export default About