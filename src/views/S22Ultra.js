import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import {ImOnedrive} from "react-icons/im";
import modelo1 from '../img/modelo1/Galaxy_S22_Ultra1.png';
import modelo2 from '../img/modelo1/Galaxy_S22_Ultra2.png';
import modelo3 from '../img/modelo1/Galaxy_S22_Ultra3.png';
import dimensiones from '../img/galaxy-s22-ultra_models_display.svg';
import al from '../img/galaxy-s22-ultra_models_durability_aluminum.svg';
import glass from '../img/galaxy-s22_models_durability_corning.svg';
import ip68 from '../img/galaxy-s22_models_durability_ip68.svg';
import frontal from '../img/galaxy-s22-ultra_models_front-camera.svg';
import trasera from '../img/galaxy-s22-ultra_models_rear-camera.svg';
import bateria from '../img/galaxy-s22_models_battery.svg';
import usb from '../img/galaxy-s22_models_battery-fast-charger_45w.jpg';
import pen from '../img/galaxy-s22-ultra_models_s-pen.svg';
import samsung from '../img/modelo1/Galaxy_S22_Ultra4.png';
export const S22Ultra =() =>{
    AOS.init();
    return(
        <div>
            <div className="fondo4" id="">
                <Navbar/>
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-around text-center">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-2 text-uppercase">Galaxy S22 Ultra</h1>
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
                        <div className="col-md-3 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo1} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Burgundy</p>
                        </div>
                        <div className="col-md-3 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo2} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Phantom White</p>
                        </div>
                        <div className="col-md-3 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo3} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Phantom Black</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Pantalla y tamaño</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={dimensiones} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='display-5'>6.8 pulgadas</p>
                            <p className='lead'>Edge Quad HD+</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Dimensiones:</b></p>
                            <p className='lead'>77.9 x 163.3 x 8.9 mm</p>
                            <br/>
                            <p><b>Peso:</b></p>
                            <p className='lead'>229 g (mmW), 228 g (sub6)</p>
                            <br/>
                            <p><b>Autenticación biométrica:</b></p>
                            <p className='lead'>Lector de huellas ultrasónico<br/>Reconocimiento facial</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo6" id="">
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <p className='lead text-uppercase'>PANTALLA</p>
                                <h1 className="display-3 text-uppercase">Nuestra pantalla más brillante para el día más brillante</h1>
                            </div>
                            <div className="col-md-4 align-self-center border-text"
                                data-aos="fade-down" data-aos-duration="3000">
                                <p className='text-justify lead'>La pantalla Dynamic AMOLED 2X con Vision Booster es el peor enemigo del resplandor, con 1750 nits en su punto máximo.3 Y la frecuencia de actualización adaptable de 120 Hz mantiene el desplazamiento suave, y se ajusta a lo que aparece en la pantalla para una vista optimizada.</p>
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
                            <p className='display-5'>1750 nits</p>
                            <p className='display-5'>120 Hz</p>
                            <p className='lead'>(1-120 Hz)</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Durabilidad</b></h1>
                            <p className='lead'>Nuestro marco de aluminio más fuerte, vidrio resistente y resistencia al agua y al polvo.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={al} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>Armazón de aluminio blindado</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={glass} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>Corning® Gorilla® Glass Victus®+</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={ip68} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>IP68</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo7" id="">
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <p className='lead text-uppercase'>CAMARA</p>
                                <h1 className="display-3 text-uppercase">Haz que las noches sean épicas con la cámara en modo Nightography</h1>
                            </div>
                            <div className="col-md-4 align-self-center border-text"
                                data-aos="fade-down" data-aos-duration="3000">
                                <p className='text-justify lead'>Con los enormes sensores de pixeles y los pixeles que cambian de forma, este teléfono tiene nuestra cámara de nivel profesional más avanzada hasta el momento, que incluye la potencia de un kit profesional en un dispositivo portátil. Toma fotos en la noche sin sacrificar la calidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Cámara frontal</b></h1>
                            <p className='lead'>Nunca ha sido tan fácil poner tu mejor cara de ahora en adelante.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={frontal} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='display-5'>40 MP</p>
                            <p className='lead'>Cámara de selfies</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Cámara trasera y zoom</b></h1>
                            <p className='lead'>Captura detalles increíbles y con gran claridad, todo con un toque.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-12 text-center align-self-center'>
                            <img src={trasera} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <div className='row mt-5'>
                                <div className='col-md-3 text-center align-self-center'>
                                    <li>
                                        1<p className='display-5'>12 MP</p>
                                        <p className='lead'>Cámara Ultra Wide</p>
                                    </li>
                                </div>
                                <div className='col-md-3 text-center align-self-center'>
                                    <li>
                                        2<p className='display-5'>108 MP</p>
                                        <p className='lead'>Cámara de gran angular</p>
                                    </li>
                                </div>
                                <div className='col-md-3 text-center align-self-center'>
                                    <li>
                                        3, 4<p className='display-5'>10 MP</p>
                                        <p className='lead'>Dos cámara con teleobjetivo</p>
                                    </li>
                                </div>
                                <div className='col-md-3 text-center align-self-center'>
                                    <p className='display-5'>100X</p>
                                    <p className='lead'>Space Zoom</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo5" id="">
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <p className='lead text-uppercase'>PROCESADOR DE 4 NM</p>
                                <h1 className="display-3 text-uppercase">El chip más rápido jamás visto en un Galaxy</h1>
                            </div>
                            <div className="col-md-4 align-self-center border-text"
                                data-aos="fade-down" data-aos-duration="3000">
                                <p className='text-justify lead'>El chip de 4 nm brinda un poder de clase mundial en casi todos los aspectos de tu teléfono, lo que resulta en tomas nocturnas épicas, fotos increíblemente claras del día a la noche y una experiencia de juego móvil optimizada para conducirte a la victoria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Batería</b></h1>
                            <p className='lead'>Carga que dura todo tu día y más.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={bateria} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-5'>5000 mAh</p>
                            <p className='lead'>(valor típico)</p>
                            <br/>
                            <p><b>Playback de audio:</b></p>
                            <p className='lead'>Hasta 81 horas</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Carga rápida Super Fast de 45 W</b></p>
                            <p className='lead'>Hasta 81 horas</p>
                            <img src={usb} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Almacenamiento</b></h1>
                            <p className='lead'>Espacio suficiente para guardar todas sus fotos y videos favoritos con poca iluminación.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-4'>512 GB</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-4'>256 GB</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p className='display-4'>128 GB</p>
                        </div>
                        <div className='col-md-10 text-center align-self-center mt-4'>
                            <p className='lead'>{ImOnedrive} Sincroniza tu galería con OneDrive y disfruta de seis meses de almacenamiento en la nube de 100 GB de OneDrive con Galaxy S22 Series.</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Compatibilidad con S Pen</b></h1>
                            <p className='lead'>La primera S Pen integrada en el Galaxy S cuenta con la clasificación IP68 y pone la precisión al alcance de tu mano.</p>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={pen} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>S Pen</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={ip68} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='lead'>IP68</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}