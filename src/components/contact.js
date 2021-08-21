import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import mecontact from '../assets/images/mecontact.png';


class Contact extends Component {
    render() {
        return(
            <div className="home-components contact-body">
                <Row className="contact-grid">
                    <Col col={6}>
                        <h2>Lakita Gaither</h2>
                        <img 
                        src={mecontact}
                        alt="lakita gaither"
                        style={{height: '300px', width: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi, I'm Kita! I am a Full-Stack MERN Web and Mobile Developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit odio hic iusto, numquam accusantium cumque est, ullam temporibus aut veniam vero magnam. Sunt labore facilis perspiciatis, necessitatibus numquam tempore! </p>
                    </Col>

                    <Col col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                    <div className="contact-ListGroup">
                        <div>
                                <ListGroup>
                                    <ListGroupItem style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-phone-square" aria-hidden="true" />
                                       (404)123-4567
                                        </ListGroupItem>
                                </ListGroup>
                                
                                <ListGroup>
                                    <ListGroupItem style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-fax" aria-hidden="true" />
                                       (615)777-9311
                                        </ListGroupItem>
                                </ListGroup>

                                <ListGroup>
                                    <ListGroupItem style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-envelope" aria-hidden="true" />
                                       k@info.com
                                        </ListGroupItem>
                                </ListGroup>

                                <ListGroup>
                                    <ListGroupItem style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                       <i className="fa fa-skype" aria-hidden="true" />
                                       MySkypeId
                                        </ListGroupItem>
                                </ListGroup>
                                
                        </div>
                    </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Contact;