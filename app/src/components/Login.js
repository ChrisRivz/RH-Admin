import React from 'react';
import '../style/Login.css'

//import Leftimage from '../logo.svg'
import Leftimage from '../image/LeftLogo.png'
import Logo from '../image/R&R-Logo.png'
class Login extends React.Component {

    //Define el elemento que se vera en pantalla
    render() {

        return (

            <div className='row'>

                <div className='col-lg-5 col-sml-12 col-md-6 flex-fill flex-right'>

                    <div className='container'>

                        <div className='card'>
                            <div className='d-flex'>
                                <div className='p-2'>

                                    <img src={Logo} alt="Logo"></img>
                                </div>
                            </div>
                            <h2>¡ BIENVENIDO !</h2>
                            <h5>Por favor, inicia sesión para continuar</h5>

                            <form className='form-login'>

                                <div className='form-group'>
                                    <label>Email</label>
                                    <input className='form-control'></input>

                                </div>


                                <div className='form-group'>
                                    <label>Password</label>
                                    <input className='form-control'></input>

                                </div>
                                <button type='button' class='btn btn-primary'>Log in</button>

                                <div className='form-footer'>
                                    <label>¿Olvidaste tu contraseña?</label>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>


                <div className='col-lg-7 col-sml-12 col-md-6 flex-left'>
                    <div className='container'>

                        <div className='card'>

                            <img src={Leftimage} alt="Login-left" />

                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default Login;