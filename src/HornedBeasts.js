import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfFav: 0,
        }
    }

    favClick = () => {
        this.setState({numberOfFav: this.state.numberOfFav + 1});
    }



    render() {
        return (
            <Card style={{ width: '20rem'}}>
                <Card.Title>
                    <h2>{this.props.beast.title}</h2>
                    <h5>Name: {this.props.beast.keyword}</h5>
                </Card.Title>
                <Card.Img src={this.props.beast.image_url} onClick={() => this.props.showModal(this.props.beast)} style={{width: '300px', height: '300px'}}/>
                <Card.Body>
                    <Card.Text>
                        <h6>Description</h6>
                        <p>{this.props.beast.description}</p>    
                        <p>Horns: {this.props.beast.horns}</p>
                    </Card.Text>
                    <Button variant='success' onClick={this.favClick}> &#10084;&#65039; {this.state.numberOfFav} </Button>
                </Card.Body>
            </Card>
        )
    }
}
