import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

class Skills extends Component {
    render() {
        return(
            <Row>
                <Col col={12}>
                    <div style={{display: 'flex'}}>
                        {this.props.skill} <Progress style={{margin: 'auto', width: '75%'}} progress={this.props.progress} />
                            
                    </div>
                </Col>
            </Row>
        );
    }
}
export default Skills;