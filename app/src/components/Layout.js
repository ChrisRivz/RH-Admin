import React from 'react';
import Avatar from '../image/Avatars/User1_Avatar.jpg'
import Logo from '../image/R&R-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';


import '../style/Menu.css'


class Layout extends React.Component {



    render() {

        return (

            <div>

                <Row>
                    <Col className='nav-menu' sm={3}>
                        <Row className="Header-menu">
                            <Col sm={12}>
                                <Nav className="justify-content-end" activeKey="/home">
                                    <Nav.Item>

                                        <Nav.Link href="/home"><FontAwesomeIcon className='icon-bell' icon={['far', 'bell']} /></Nav.Link>

                                    </Nav.Item>
                                    <Nav.Item>

                                        <Nav.Link href="/home"><FontAwesomeIcon className='icon-user' icon={['far', 'user-circle']} /></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>

                            <Col className="Section-profile" sm={12}>
                                <Image className="Avatar-profile" src={Avatar} roundedCircle />
                                <h6>
                                    Christopher Rivadeneyra
                                </h6>
                                <label>christopher.rivadeneyra@itconsultingrr.com</label>
                            </Col>

                            <Col sm={12}>
                                <ListGroup className='Menu-list'>
                                    <ListGroup.Item> <FontAwesomeIcon className='icon-user-list' icon={['far', 'user-circle']} /> Perfil</ListGroup.Item>
                                    <ListGroup.Item> <FontAwesomeIcon className='icon-receipt' icon={['fas', 'receipt']} /> Recibos de Nomina</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>


                    </Col>
                    <Col sm={9}>

                        <Navbar>
                            <Container>
                                <Navbar.Text href="#"><FontAwesomeIcon className="icon-menu" icon={["fas", "bars"]}></FontAwesomeIcon></Navbar.Text>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        <a href="#login">Salir</a>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        <Navbar className="Navbar-content">
                            <Row>

                                <Col sm={12}>
                                    <h3>¡Bienvenido, Christopher!</h3></Col>
                            </Row>
                        </Navbar>



                    </Col>
                </Row>

                <Row>
                </Row>


            </div>

        )
    }
}


export default Layout;