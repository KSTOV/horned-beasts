import { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class HornedBeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.keyword,
            numberOfFav: 0
        }
    }

    handleClick = () => this.setState({numberOfFav: this.state.numberOfFav + 1});

    render() {
        return (
            <Card style={{ width: '20rem'}}>
                <Card.Title>
                    <h2>{this.props.title}</h2>
                    <h5>Name: {this.props.keyword}</h5>
                </Card.Title>
                <Card.Img variant='top' src={this.props.image_url} onClick={this.handleClick}/>
                <Card.Body>
                    <Card.Text>
                        <h6>Description</h6>
                        <p>{this.props.description}</p>    
                        <p>Horns: {this.props.horns}</p>
                    </Card.Text>
                    <Card.Text onClick={this.handleClick}> &#10084;&#65039; {this.state.numberOfFav} </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
