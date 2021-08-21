import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Experience extends Component {
    render() {
        return(
            <Row>
                <Col col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Col>
                    
                <Col col={8} >{this.props.jobName}
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Col>
            </Row>
        );
    }
}
export default Experience;