import React, { Component } from 'react'
import { Card, CardBody, Button } from 'reactstrap';

import logo from '../logo.svg';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <Card className="m-2" style={{ height: 600 }}>
                    <img src={logo} className=".App-logo" alt="logo" />
                    <p>Welcome To Yaspeez </p>
                    <CardBody>
                        <Button href="/login" outline color="primary" size="lg" >Sign In</Button>{' '}
                        <Button href="/register" outline color="success" size="lg" >Sign Up</Button>
                    </CardBody>
                </Card>

            </div>

        )
    }
}

export default Landing