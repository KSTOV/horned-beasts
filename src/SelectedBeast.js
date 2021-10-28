import { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap';

export default class SelectedBeast extends Component {

    render() {
        return (
            <div>
                <Modal show={this.props.beast} onClick={this.props.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.beast.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body><img src={this.props.beast.image_url} alt={this.props.beast.keyword} style= {{ width: "100%" }}/></Modal.Body>
                    <Modal.Body>
                        <h6>Description</h6>
                        {this.props.beast.description}
                        <p>Horns: {this.props.beast.horns}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='success' onClick={this.props.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}