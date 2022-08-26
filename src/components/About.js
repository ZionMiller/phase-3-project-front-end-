import React from "react";
import { Card, Image, Grid, Icon, Menu } from "semantic-ui-react";

function About() {
  return (
    <div>
      <Image.Group size="tiny" spaced="left"></Image.Group>
      <Grid centered columns={3}>
        <br />
      </Grid>
      <h1 id="meet-developers">Our Developers:</h1>
      <Card.Group id='about-cards' itemsPerRow={3}>
        <Card>
          <img
            height={400}
            src="./images/garret-about.jpg"
            wrapped
            ui={false}
          />
          <Card.Content textAlign="center">
            <Card.Header>Garret Gallant</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Garret Gallant is a fullstack engineer from Colorado.
            </Card.Description>
            <Menu.Item
                href="https://github.com/Garret-Gallant"
                position="right"
                target="_blank"
                >
                <Icon name="github" size="big" />
                </Menu.Item>
                <Menu.Item
                href="https://www.linkedin.com/in/garret-gallant/"
                position="right"
                target="_blank"
                >
                <Icon name="linkedin" size="big" />
                </Menu.Item>
                <Menu.Item
                href="https://medium.com/@GarretGallant"
                position="right"
                target="_blank"
                >
                <Icon name="medium" size="big" />
                </Menu.Item>
          </Card.Content>
        </Card>
        <Card>
          <img
            height={400}
            src="./images/zion-about.jpg"
            wrapped
            ui={false}
          />
          <Card.Content textAlign="center">
            <Card.Header>Zion Miller</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Zion Miller is a fullstack engineer from California.
            </Card.Description>
                <Menu.Item
                href="https://github.com/ZionMiller"
                position="right"
                target="_blank"
                >
                <Icon name="github" size="big" />
                </Menu.Item>
                <Menu.Item
                href="https://www.linkedin.com/in/zion-miller-b15344170/"
                position="right"
                target="_blank"
                >
                <Icon name="linkedin" size="big" />
                </Menu.Item>
                <Menu.Item
                href="https://medium.com/@zionmiller"
                position="right"
                target="_blank"
                >
                <Icon name="medium" size="big" />
                </Menu.Item>
          </Card.Content>
        </Card>
        <Card>
          <img
            height={400}
            src="./images/tommy-about.png"
            wrapped
            ui={false}
          />
          <Card.Content textAlign="center">
            <Card.Header>Tommy Nguyen</Card.Header>
            <Card.Meta>Full Stack Software Engineer</Card.Meta>
            <Card.Description>
              Tommy Nguyen is a fullstack engineer from California.
            </Card.Description>
            <Menu.Item
                href=""
                position="right"
                target="_blank"
                >
                <Icon name="github" size="big" />
                </Menu.Item>
                <Menu.Item
                href="https://www.linkedin.com/in/tommy-nguyen-9a3b90122/"
                position="right"
                target="_blank"
                >
                <Icon name="linkedin" size="big" />
                </Menu.Item>
                <Menu.Item
                href="https://medium.com/@sixty22tommy"
                position="right"
                target="_blank"
                >
                <Icon name="medium" size="big" />
                </Menu.Item>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default About;
