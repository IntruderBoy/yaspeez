import React, { Component } from 'react';
import { CardBody, Row, Col, Card, CardHeader } from 'reactstrap';

import Navbar from './Navbar';
import Follow from "./Follow/Cards";
import Pie from './charts/Piechart';
import Bar from './charts/BarChart';
import List from './list/Info';

class Overview extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Follow />

                <CardBody>
                    <Row>
                        <Col sm="4">
                            <Card>
                                <CardHeader tag="h4">Members</CardHeader>
                                <Pie />
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card>
                                <CardHeader tag="h4">Age Stats</CardHeader>
                                <Bar />
                             
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
                <List/>

            </div>
        )
    }
}

export default Overview;