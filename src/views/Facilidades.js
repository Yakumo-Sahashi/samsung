import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import meses from '../img/facilidades/meses.jpg';
import logistica from '../img/facilidades/logistica.jpeg';
import cambio from '../img/facilidades/cambio.jpg';
export const Facilidades =() =>{
    AOS.init();
    return(
        <div>
            <div className="fondo15" id="">
                <Navbar/>
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-6 align-self-center border-text text-center mb-3"
                                data-aos="fade-up" data-aos-duration="3000">                                
                                <h1 className="display-3 text-uppercase">Facilidades al cliente</h1>
                            </div>
                            <div className="col-md-6 align-self-center mb-3"
                                data-aos="fade-down" data-aos-duration="3000">
                                <img src={meses} className="img-fluid mx-auto d-block rounded" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row justify-content-around mt-5 mb-5" id="yt">
                        <div className="col-md-3 mb-3 text-center"  data-aos="fade-up"  data-aos-duration="3000">
                            <img src="../img/samsung_s221.png" className="img-fluid mx-auto d-block rounded" alt=""/>
                        </div>
                        <div className="col-md-8 align-self-center mb-3 text-center" data-aos="fade-right"  data-aos-duration="3000">
                            <h1 className='display-5'><b>Galaxy S22 al alcance de tu bolsillo!</b></h1>
                            <hr className="bg-light"/>            
                        </div>
                    </div>
                </div>
            </div>     
            <div className="fondo16" id="">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-6 align-self-center border-text mb-3"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-3 text-uppercase">Logistica inversa</h1>
                            </div>
                            <div className="col-md-6 align-self-center mb-3"
                                data-aos="fade-down" data-aos-duration="3000">
                                <img src={logistica} className="img-fluid mx-auto d-block rounded" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo17" id="">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-4 align-self-center mb-3"
                                data-aos="fade-down" data-aos-duration="3000">
                                <img src={cambio} className="img-fluid mx-auto d-block rounded" alt=""/>
                            </div>
                            <div className="col-md-8 align-self-center mb-3 text-center"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-4 text-uppercase">¡Canjea tú equipo viejo y recibe un 10% de descuento en tu siguiente compra!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}