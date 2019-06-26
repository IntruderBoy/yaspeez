import React, { Component } from 'react'
import { CardBody, Table } from 'reactstrap';


export default class Info extends Component {
    render() {
        return (
            <div className="container">

                <CardBody>

                    <Table borderless className="mt-2">
                        <thead>
                            <tr className="bg-primary">
                                <th>Name</th>
                                <th>Type</th>
                                <th>Address</th>
                                <th>Logo</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Description</th>
                                <th>Sports</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Coach</td>
                                <td>59 Sit Rd.Azusa New York</td>
                                <td>John Doe</td>
                                <td>Logo</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>David</td>
                                <td>Hall</td>
                                <td>82 Sit Ave Liberal Vermont</td>
                                <td>John Doe</td>
                                <td>Logo</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
            </div>
        )
    }
}
