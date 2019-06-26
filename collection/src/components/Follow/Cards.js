import React, { Component } from 'react'
import {
    Card,
    Row,
    Col,
    CardBody,
    CardTitle
} from 'reactstrap'

export default class Cards extends Component {
    render() {
        return (
            <div>
                <CardBody className="m-2">
                    <Row>
                        <Col sm="3">
                            <Card color="primary">
                                <CardBody >
                                    <h3> 540</h3>
                                    <CardTitle>Followers</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card color="success">
                                <CardBody>
                                    <h3> 20k</h3>
                                    <CardTitle>Members</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card color="warning">
                                <CardBody>
                                    <h3>4.5</h3>
                                    <CardTitle>Rating</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </div>
        )
    }
}
