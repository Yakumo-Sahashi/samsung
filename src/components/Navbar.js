//import {NavLink} from 'react-router-dom';
import { AiFillHome, AiTwotoneMobile} from "react-icons/ai";
import { BiMobile} from "react-icons/bi";
import { BsHeadset, BsCashStack} from "react-icons/bs";

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-transparente borde-nav menu">
            <div className="container text-center">
                <a className="navbar-brand text-white" href="/"><b>SAMSUNG</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="btn btn-primary" id="#btn_home" >
                                <AiFillHome/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="especificaciones" className='btn btn-primary'>
                                <BiMobile/> Especificaciones
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="btn btn-primary dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <AiTwotoneMobile/> Modelos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="S22Ultra">Galaxy S22 Ultra</a></li>
                                <li><a className="dropdown-item" href="S22Plus">Galaxy S22+</a></li>
                                <li><a className="dropdown-item" href="S22">Galaxy S22</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="accesorios" className="btn btn-primary">
                                <BsHeadset/> Accesorios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="facilidades" className="btn btn-primary" id="#btn_industrial">
                                <BsCashStack/> Facilidades
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}