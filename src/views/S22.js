import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import {ImOnedrive} from "react-icons/im";
import modelo1 from '../img/modelo3/Galaxy_S22_1.png';
import modelo2 from '../img/modelo3/Galaxy_S22_2.png';
import modelo3 from '../img/modelo3/Galaxy_S22_3.png';
import modelo4 from '../img/modelo3/Galaxy_S22_4.png';
import modelo5 from '../img/modelo3/Galaxy_S22_5.png';
import dimensiones from '../img/galaxy-s22-ultra_models_display.svg';
import al from '../img/galaxy-s22-ultra_models_durability_aluminum.svg';
import glass from '../img/galaxy-s22_models_durability_corning.svg';
import ip68 from '../img/galaxy-s22_models_durability_ip68.svg';
import frontal from '../img/galaxy-s22-ultra_models_front-camera.svg';
import trasera from '../img/galaxy-s22-plus_models_rear-camera.svg';
import bateria from '../img/galaxy-s22_models_battery.svg';
import usb from '../img/galaxy-s22_models_battery-fast-charger_45w.jpg';
import samsung from '../img/samsung_s22.png';
export const S22 =() =>{
    AOS.init();
    return(
        <div>
            <div className="fondo11" id="">
                <Navbar/>
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-around text-center">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-2 text-uppercase">Galaxy S22</h1>
                            </div>
                            <div className="col-md-4 align-self-center"
                                data-aos="fade-down" data-aos-duration="3000">
                                <img src={samsung} className="img-fluid mx-auto d-block"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row justify-content-around mt-5 mb-5">
                        <div className='col-md-12 mb-4' data-aos="fade-up" data-aos-duration="3000">
                            <h1 className='display-4'><b>Colores</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className="col-md-4 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo1} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>P??rpura Bora</p>
                        </div>
                        <div className="col-md-4 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo2} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Blanco fantasma</p>
                        </div>
                        <div className="col-md-4 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo3} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Green</p>
                        </div>
                        <div className="col-md-4 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo4} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Pink Gold</p>
                        </div>
                        <div className="col-md-4 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo5} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Phantom Black</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Pantalla y tama??o</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={dimensiones} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='display-5'>6.1 pulgadas</p>
                            <p className='lead'>Flat FHD+</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Dimensiones:</b></p>
                            <p className='lead'>70.6 x 146 x 7.6 mm</p>
                            <br/>
                            <p><b>Peso:</b></p>
                            <p className='lead'>168 g (mmW), 167 g (sub6)</p>
                            <br/>
                            <p><b>Autenticaci??n biom??trica:</b></p>
                            <p className='lead'>Lector de huellas ultras??nico<br/>Reconocimiento facial</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo12" id="">
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <p className='lead text-uppercase'>PANTALLA</p>
                                <h1 className="display-3 text-uppercase">Adi??s al resplandor</h1>
                            </div>
                            <div className="col-md-4 align-self-center border-text"
                                data-aos="fade-down" data-aos-duration="3000">
                                <p className='text-justify lead'>Luz solar, te presentamos la pantalla brillante del Galaxy S22 y la pantalla m??s brillante del Galaxy S22+.9 Las asombrosas pantallas Infinity-O de 120 Hz est??n construidas con Dynamic AMOLED 2X con tecnolog??a Vision Booster para una alta visibilidad al aire libre, lo que mantiene la vista clara a plena luz del d??a o de noche.10 Ahora el ??nico resplandor que obtendr??s ser??n las miradas de envidia de los que te rodean.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Dynamic AMOLED 2X con Vision Booster</b></h1>
                            <p className='lead'>Nuestras brillantes pantallas con desplazamiento supersuave.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-5'>1300 nits</p>
                            <p className='display-5'>120 Hz</p>
                            <p className='lead'>(48-120 Hz)</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Durabilidad</b></h1>
                            <p className='lead'>Nuestro marco de aluminio m??s fuerte, vidrio resistente y resistencia al agua y al polvo.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={al} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>Armaz??n de aluminio blindado</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={glass} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>Corning?? Gorilla?? Glass Victus??+</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={ip68} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>IP68</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo10" id="">
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <p className='lead text-uppercase'>RETRATOS POR LA NOCHE</p>
                                <h1 className="display-3 text-uppercase">La Nightography pone los retratos en una nueva luz</h1>
                            </div>
                            <div className="col-md-4 align-self-center border-text"
                                data-aos="fade-down" data-aos-duration="3000">
                                <p className='text-justify lead'>Obt??n retratos ??picos y autorretratos con poca luz gracias a los revolucionarios avances de la c??mara trasera y la c??mara de selfies. Cada una captura m??s luz para lograr colores y detalles incre??bles, con lo que puedes dominar el modo Retrato con poca iluminaci??n.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>C??mara frontal</b></h1>
                            <p className='lead'>Nunca ha sido tan f??cil poner tu mejor cara de ahora en adelante.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={frontal} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='display-5'>10 MP</p>
                            <p className='lead'>C??mara de selfies</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>C??mara trasera y zoom</b></h1>
                            <p className='lead'>Captura detalles incre??bles y con gran claridad, todo con un toque.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-12 text-center align-self-center'>
                            <img src={trasera} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <div className='row mt-5'>
                                <div className='col-md-3 text-center align-self-center'>
                                    <li>
                                        1<p className='display-5'>12 MP</p>
                                        <p className='lead'>C??mara Ultra Wide</p>
                                    </li>
                                </div>
                                <div className='col-md-3 text-center align-self-center'>
                                    <li>
                                        2<p className='display-5'>50 MP</p>
                                        <p className='lead'>C??mara de gran angular</p>
                                    </li>
                                </div>
                                <div className='col-md-3 text-center align-self-center'>
                                    <li>
                                        3<p className='display-5'>10 MP</p>
                                        <p className='lead'>C??mara con teleobjetivo</p>
                                    </li>
                                </div>
                                <div className='col-md-3 text-center align-self-center'>
                                    <p className='display-5'>30X</p>
                                    <p className='lead'>Space Zoom</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo13" id="">
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <p className='lead text-uppercase'>C??MARA GALAXY DE NIVEL PROFESIONAL</p>
                                <h1 className="display-3 text-uppercase">S?? el fot??grafo oficial del chat grupal</h1>
                            </div>
                            <div className="col-md-4 align-self-center border-text"
                                data-aos="fade-down" data-aos-duration="3000">
                                <p className='text-justify lead'>Es un kit profesional que cabe en una mano. La c??mara trasera triple y la c??mara para selfies ofrecen hardware y software de c??mara innovadores para que puedas tomar f??cilmente una galer??a llena de contenido digno de compartir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Bater??a</b></h1>
                            <p className='lead'>Carga que dura todo tu d??a y m??s.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={bateria} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-5'>3700 mAh</p>
                            <p className='lead'>(valor t??pico)</p>
                            <br/>
                            <p><b>Playback de audio:</b></p>
                            <p className='lead'>Hasta 54 horas</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Carga r??pida Super Fast de 25 W</b></p>
                            <p className='lead'>Hasta 81 horas</p>
                            <img src={usb} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Almacenamiento</b></h1>
                            <p className='lead'>Espacio suficiente para guardar todas sus fotos y videos favoritos con poca iluminaci??n.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-4'>-</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-4'>256 GB</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-4'>128 GB</p>
                        </div>
                        <div className='col-md-10 text-center align-self-center mt-4'>
                            <p className='lead'>{ImOnedrive} Sincroniza tu galer??a con OneDrive y disfruta de seis meses de almacenamiento en la nube de 100 GB de OneDrive con Galaxy S22 Series.</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Compatibilidad con S Pen</b></h1>
                            <p className='lead'>La primera S Pen integrada en el Galaxy S cuenta con la clasificaci??n IP68 y pone la precisi??n al alcance de tu mano.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='lead'>-</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='lead'>-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}