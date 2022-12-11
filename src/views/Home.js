import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import samsung1 from '../img/samsung_s222.png';
import samsung2 from '../img/samsung_s221.png';
import samsung3 from '../img/samsung_s22.png';
 
export const Home = () => {
    AOS.init();
    return(
        <div>
            <div className="fondo" id="home">
                <Navbar/>
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-around text-start">
                            <div className="col-md-4 align-self-center" data-aos="fade-down" data-aos-duration="3000">
                                <img src={samsung1} alt="" className="img-fluid mx-auto d-block"/>
                            </div>
                            <div className="col-md-7 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-4 text-uppercase">Samsung Galaxy S22</h1>
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-5">
                                        <a className="btn btn-outline-light btn-block btn-lg" href="#mas">Ver
                                            mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-transparente mb-0 text-white" id="mas">
                <div className="container py-5 ">
                    <div className="row justify-content-around mt-5 mb-5" id="yt">
                        <div className="col-md-8 align-self-center mb-2" data-aos="fade-right"  data-aos-duration="3000">
                            <h1><b>Galaxy S22 | Video oficial</b></h1>
                            <hr className="bg-light"/>
                            <div className="ratio ratio-16x9">
                                <iframe loading="lazy" className="rounded border-pink" src="https://www.youtube.com/embed/9RmCoWuN8RI" title="YouTube video" allowfullscreen></iframe>
                            </div>              
                        </div>
                        <div className="col-md-3 mb-2"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src={samsung2} className="img-fluid mx-auto d-block" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4" id="seccion5" data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-md-4 py-2 text-center">
                            <h4 className="py-2 mt-4 border-text"> Galaxy S22 | S22+</h4>
                            <p className="lead py-3">"Tiene una pantalla hermosa, un rendimiento sólido y una larga vida útil de la batería".</p>
                            <br/><br/>
                            <p className="lead py-3"><b>Gizmodo</b></p>
                        </div>
                        <div className="col-md-4 py-2 text-center">
                            <h4 className="py-2 mt-4 border-text"> Galaxy S22</h4>
                            <p className="lead py-3">"Un teléfono Android de buen aspecto, cómodo, capaz y visiblemente potente".</p>
                            <br/><br/>
                            <p className="lead py-3"><b>Tom's Guide</b><br/>02/2022</p>
                        </div>
            
                        <div className="col-md-4 py-2 text-center">
                            <h4 className="py-2 mt-4 border-text"> Galaxy S22</h4>
                            <p className="lead py-3">"...Se siente como un dispositivo casi perfecto para las personas que prefieren teléfonos más pequeños".</p>
                            <br/><br/>
                            <p className="lead py-3"><b>CNET</b></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fondo2" id="seccion2">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="row align justify-content-center text-start">
                            <div className="col-md-10">
                                <h1 className="display-2 mb-4 border-text">Samsung Galaxy S22</h1>
                                <hr/>
                                <p className="py-2 text-justify display-5">El teléfono que hace cada día épico.</p>
                                <hr/>
                                <p className="py-2 text-justify display-5">Cámara en modo Nightography.</p>
                                <hr/>
                                <p className="py-2 text-justify display-5">Batería para mucho más que todo el día.</p>
                                <hr/>
                                <p className="py-2 text-justify display-5">Nuestro chip más rápido.</p>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fondo3">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-center text-start">
                            <div className="col-md-4 align-self-center" data-aos="fade-down" data-aos-duration="3000">
                                <img src={samsung3} className="img-fluid mx-auto d-block" alt=""/>                               
                            </div>
                            <div className="col-md-8 align-self-center" data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-1 mb-5 border-text">La nueva forma de expresión creativa</h1>
                                <p className="lead text-justify">
                                    Los biseles delgados fluyen en un marco pulido simétrico para tener una pantalla amplia y equilibrada. Como toque final, la carcasa monocromática de la cámara rodea un sistema de cámara lineal. Todo muy hermoso.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fondo23">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-center text-start">
                            <div className="col-md-10 align-self-center" data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-3 mb-5 border-text">Haz que las noches sean épicas con la cámara en modo Nightography</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}