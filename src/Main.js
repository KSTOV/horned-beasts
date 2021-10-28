import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Main extends Component {

    render() {
        return (
            <Container>
                <Row xs={1} sm={2} md={3} lg={4}>
                    {this.props.data.map(beast => <HornedBeasts beast={beast} showModal={this.props.showModal}/>)}
                </Row>
            </Container>
        )
    }
}