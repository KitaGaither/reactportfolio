import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import mecircle from '../assets/images/mecircle.png';

class Home extends Component {
  render() {
    return (
      <Container className="home-components" style={{ width: '100%', margin: 'auto' }}>
        <Row className='landing-grid'>
          <Col col={12}>
            <img src={mecircle} alt='lakita gaither' className='avatar-image' />
            <div className='banner-text'>
              <h1>Full-Stack Web Developer</h1>
              <hr />
              <p>
                JavaScript | HTML/CSS | Bootstrap | MongoDB | Express | React |
                React Native | Node
              </p>
              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/lakitagaither/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a
                  href='https://github.com/KitaGaither'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

                {/* Freecodecamp */}
                <a
                  href='https://www.freecodecamp.org/kitagaither'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>

                {/* Youtube
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
                */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
