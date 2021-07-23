import React from 'react';
import '../style/Login.css'

//import Leftimage from '../logo.svg'
import Leftimage from '../image/LeftLogo.png'
import Logo from '../image/R&R-Logo.png'




class Login extends React.Component {


    state = {
        
        user:'',
        password: ''
    }

    handleChange = e => {

        //cada input esta guardando su propio valo + setState
        //console.log(e.target.value);
        this.setState ({
            [e.target.name]: e.target.value,
        })

    }
    handleSubmit = e =>{

        console.log(this.state)

    }
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
                                    <label>Usuario</label>
                                    <input 
                                    onChange={this.handleChange}
                                    type='text'
                                    autoComplete='username'
                                    className='form-control' 
                                    placeholder='Ingre se usuario'
                                    name="user"
                                    value={this.state.user}
                                    />

                                </div>


                                <div className='form-group'>
                                    <label>Password</label>
                                    <input 
                                    onChange={this.handleChange}
                                    type='password'
                                    autoComplete='new-password'
                                    className='form-control' 
                                    placeholder='Ingre se password'
                                    name='password'
                                    value={this.state.password}
                                    />

                                </div>
                                <button 
                                type='button' 
                                className='btn btn-primary'
                                onClick={this.handleSubmit}
                                >Log in</button>

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