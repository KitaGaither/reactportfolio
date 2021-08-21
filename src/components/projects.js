import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

class Projects extends Component {
  render() {
    return(
      <React.Fragment>
        
        <h1 style={{textAlign: 'center', color: 'magenta', borderColor: 'black'}}>Projects</h1>

        <CardDeck className="home-components card-deck">

          <Card className="project-cards">
            <CardImg top width="100%" src alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Bootstrap Project</CardTitle>
              <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab magnam ex illum quae architecto deleniti doloremque ad enim consequatur pariatur velit labore unde animi maxime facere, error fugit quidem?</CardText>
              <Button className="card-button">Button</Button>
            </CardBody>
          </Card>

          <Card className="project-cards">
            <CardImg top width="100%" src alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">React Project</CardTitle>
              <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, delectus ipsam quaerat dolorem alias optio corporis, magnam quo qui animi inventore eos numquam, odio atque similique! Esse inventore itaque nihil.</CardText>
              <Button className="card-button">Button</Button>
            </CardBody>
          </Card>

          <Card className="project-cards">
            <CardImg top width="100%" src alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">React Native Project</CardTitle>
              <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam dicta itaque quia blanditiis incidunt nobis atque nulla, illum saepe, ex nisi asperiores hic, quis assumenda animi harum id delectus.</CardText>
              <Button className="card-button">Button</Button>
            </CardBody>
          </Card>
        </CardDeck>

      </React.Fragment>
    );
  }
}
export default Projects;