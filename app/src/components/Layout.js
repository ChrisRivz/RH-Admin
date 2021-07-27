import React from 'react';
import Avatar from '../image/Avatars/User1_Avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import '../style/Layout-header.css'


class Layout extends React.Component {



    render() {

        return (

            <div>
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <div className="row">


                        <div className='col-lg-6'>

                        </div>

                        <div className='col-lg-6'>


                            <div className="navbar-contianer">

                                <ul className="nav">
                                    <li className="nav-item">
                                        <label className="nav-link">Bienvenido Christopher Emanuel</label>
                                    </li>
                                    <li className="nav-item">

                                        <span className="nav-item">

                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic">

                                                    <img src={Avatar} alt='Avatar' />
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1"><FontAwesomeIcon className='icon-user' icon={['fas', 'user-edit']} />Mi Perfil</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2"><FontAwesomeIcon className='icon-logout' icon={['fas', 'sign-out-alt']} />Logout</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>


                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </nav>


                <Row>
                    <Col className='nav-menu' sm={2}>

                    <Container>

                        <Nav defaultActiveKey="/home" className="flex-column">

                            <Nav.Link className='nav-link' href="/home"><FontAwesomeIcon className='icon-id' icon={['fas', 'id-card']} />Mi Perfil</Nav.Link>
                            <Nav.Link className='nav-link' eventKey="link-1"><FontAwesomeIcon className='icon-file' icon={['fas', 'file-invoice']} />Recibos de nomina</Nav.Link>
                     
                        </Nav>


                        </Container>
                    </Col>
                    <Col sm={8}></Col>
                </Row>


            </div>

        )
    }
}


export default Layout;