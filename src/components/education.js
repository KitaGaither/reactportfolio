import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Education extends Component {
    render() {
        return(
            <Row>
                <Col col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Col>
                    
                <Col col={8} >{this.props.schoolName}
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Col>
            </Row>
        );
    }
}
export default Education;