import { Component } from 'react';
import img from './assets/logo.svg'
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg='success' >
                    <Navbar.Brand href='home'>
                        <img 
                        alt='' 
                        src={img}   
                        width='30' 
                        height='30'
                        className=''
                        />{''}
                        Horned Beasts
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="gallery">Gallery</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default Header;