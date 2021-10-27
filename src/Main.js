import { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import { Row } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <Row>{data.map(dataInfo => <HornedBeasts {...dataInfo}/>)}</Row>
        )
    }
}

export default Main;