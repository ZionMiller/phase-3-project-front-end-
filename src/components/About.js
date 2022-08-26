import React from 'react'
import { Card, Image, Grid, Icon} from 'semantic-ui-react'

function About() {
  return (
    <div>
    <Image.Group size='tiny' spaced='left'>
      </Image.Group>
      <Grid centered columns={3}>
        <br />
      </Grid >
        <h1 id="meet-developers">Our Developers:</h1>
        <Card.Group itemsPerRow={3}>
        <Card>
          <Image src='https://www.ctvnews.ca/polopoly_fs/1.2842838.1459624452!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg' wrapped ui={false} />
          <Card.Content textAlign='center'>
            <Card.Header>Garret Gallant</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Garret Gallant is a fullstack engineer from Colorado.
            </Card.Description>
            <Icon name="github"/>
            <Icon name="linkedin"/>
            <Icon name="medium"/>
          </Card.Content>
        </Card>
        <Card>
          <Image src='https://www.ctvnews.ca/polopoly_fs/1.2842838.1459624452!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg' wrapped ui={false} />
          <Card.Content textAlign='center'>
            <Card.Header>Zion Miller</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Zion Miller is a fullstack engineer from California.
            </Card.Description>
            <Icon name="github"/>
            <Icon name="linkedin"/>
            <Icon name="medium"/>
          </Card.Content>
        </Card>
        <Card>
          <Image src='https://www.ctvnews.ca/polopoly_fs/1.2842838.1459624452!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg' wrapped ui={false} />
          <Card.Content textAlign='center'>
            <Card.Header>Tommy Nguyen</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Tommy Nguyen is a fullstack engineer from California.
            </Card.Description>
            <Icon name="github"/>
            <Icon name="linkedin"/>
            <Icon name="medium"/>
          </Card.Content>
        </Card>
        </Card.Group>
    </div>
  )
}

export default About