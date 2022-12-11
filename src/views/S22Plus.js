import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import {ImOnedrive} from "react-icons/im";
import modelo1 from '../img/modelo2/Galaxy_S22_Plus1.png';
import modelo2 from '../img/modelo2/Galaxy_S22_Plus2.png';
import modelo3 from '../img/modelo2/Galaxy_S22_Plus3.png';
import modelo4 from '../img/modelo2/Galaxy_S22_Plus4.png';
import dimensiones from '../img/galaxy-s22-ultra_models_display.svg';
import al from '../img/galaxy-s22-ultra_models_durability_aluminum.svg';
import glass from '../img/galaxy-s22_models_durability_corning.svg';
import ip68 from '../img/galaxy-s22_models_durability_ip68.svg';
import frontal from '../img/galaxy-s22-ultra_models_front-camera.svg';
import trasera from '../img/galaxy-s22-plus_models_rear-camera.svg';
import bateria from '../img/galaxy-s22_models_battery.svg';
import usb from '../img/galaxy-s22_models_battery-fast-charger_45w.jpg';
import samsung from '../img/samsung_s222.png';
export const S22Plus =() =>{
    AOS.init();
    return(
        <div>
            <div className="fondo8" id="">
                <Navbar/>
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-around text-center">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-2 text-uppercase">Galaxy S22+</h1>
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
                            <p className='mt-3 lead'>Phantom White</p>
                        </div>
                        <div className="col-md-3 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo2} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Green</p>
                        </div>
                        <div className="col-md-3 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo3} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Pink Gold</p>
                        </div>
                        <div className="col-md-3 mb-2 align-self-center text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={modelo4} className="img-fluid mx-auto d-block" alt=""/>
                            <p className='mt-3 lead'>Negro fantasma</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Pantalla y tamaño</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <img src={dimensiones} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                            <p className='display-5'>6.6 pulgadas</p>
                            <p className='lead'>Flat FHD+</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Dimensiones:</b></p>
                            <p className='lead'>75.8 x 157.4 x 7.6 mm</p>
                            <br/>
                            <p><b>Peso:</b></p>
                            <p className='lead'>196 g (mmW), 195 g (sub6)</p>
                            <br/>
                            <p><b>Autenticación biométrica:</b></p>
                            <p className='lead'>Lector de huellas ultrasónico<br/>Reconocimiento facial</p>
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
                                <p className='lead text-uppercase'>PANTALLA</p>
                                <h1 className="display-3 text-uppercase">Adiós al resplandor</h1>
                            </div>
                            <div className="col-md-4 align-self-center border-text"
                                data-aos="fade-down" data-aos-duration="3000">
                                <p className='text-justify lead'>Luz solar, te presentamos la pantalla brillante del Galaxy S22 y la pantalla más brillante del Galaxy S22+.9 Las asombrosas pantallas Infinity-O de 120 Hz están construidas con Dynamic AMOLED 2X con tecnología Vision Booster para una alta visibilidad al aire libre, lo que mantiene la vista clara a plena luz del día o de noche.10 Ahora el único resplandor que obtendrás serán las miradas de envidia de los que te rodean.</p>
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
                            <p className='lead'>(48-120 Hz)</p>
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
            <div className="fondo9" id="">
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
                                <p className='text-justify lead'>Es un kit profesional que cabe en una mano. La cámara trasera triple y la cámara para selfies ofrecen hardware y software de cámara innovadores para que puedas tomar fácilmente una galería llena de contenido digno de compartir.</p>
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
                            <p className='display-5'>10 MP</p>
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
                                        2<p className='display-5'>50 MP</p>
                                        <p className='lead'>Cámara de gran angular</p>
                                    </li>
                                </div>
                                <div className='col-md-3 text-center align-self-center'>
                                    <li>
                                        3<p className='display-5'>10 MP</p>
                                        <p className='lead'>Cámara con teleobjetivo</p>
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
                                <p className='text-justify lead'>Ya sea que pases el día vlogando, jugando toda la noche o simplemente desplazándote por tu red social favorita, el procesador de 4nm te brinda una experiencia increíblemente suave.</p>
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
                            <p className='display-5'>4500 mAh</p>
                            <p className='lead'>(valor típico)</p>
                            <br/>
                            <p><b>Playback de audio:</b></p>
                            <p className='lead'>Hasta 69 horas</p>
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
                            <p className='display-4'>-</p>
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