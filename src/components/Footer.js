import { IoMdArrowDropup } from "react-icons/io";
import React from 'react';
import fav from '../img/favicon.png';
import logo from '../img/logo.png';
export const Footer = () => {
    React.useEffect(() => {
        document.querySelector('.go-top-container').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }, []);;
    return(
        <div>
            <div className="card rounded-0 bg-azul text-white borde-footer" id="contacto">
            <div className="card-body mt-3">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-2 d-none d-md-block align-self-center">
                            <img src={logo} className="img-fluid mx-auto d-block"/>
                        </div>
                        <div className="col-sm-12 col-md-8 align-self-center text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-12 text-center">
                                    <h5><b>Integrantes:</b></h5>
                                    <hr/>
                                </div>
                                <div className="col-md-4 text-center align-self-center">
                                    <p className="lead border-text">Edanae Torres Flores</p>
                                </div>
                                <div className="col-md-4 text-center align-self-center">
                                    <p className="lead border-text">Jade Inan Gamiño Garcia</p>
                                </div>
                                <div className="col-md-4 text-center align-self-center">
                                    <p className="lead border-text">Cesar Esparza Rojas</p>
                                </div>
                                <div className="col-md-12 text-center">
                                    <hr/>
                                    <p className="text-muted">Ing. En Gestión Empresarial</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 d-none d-md-block  align-self-center">
                            <img src={fav} className="mx-auto d-block" width="35%"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer text-center">
                <p className="copy" >Copyright <i className="far fa-copyright"></i> 1995-2022 Samsung. - Todos los derechos reservados.</p>
            </div>
        </div>
        <div type="button" className="go-top-container">
            <div className="go-top-button">
                <br/> &nbsp; &nbsp;  &nbsp;
                <IoMdArrowDropup size={30}/>
            </div>
        </div>
        </div>       
    );
}