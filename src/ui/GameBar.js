'use client';

import '../ui/styles/GameBar.css';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


export default function GameBar() {
    return (
        <Navbar className="gamebar mb-4">
            <Container>
                <Navbar.Brand href="#home" className='brand-logo'>
                    <img
                        alt=""
                        src="/icon.webp"
                        width="40"
                        height="40"
                        className="d-inline-block align-top brand-icon"
                    />{' '}
                    <span className='brand-title'>rivia!</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}