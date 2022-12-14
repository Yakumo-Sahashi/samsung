import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import modelo1 from '../img/samsung_s22.png';
import protector from '../img/accesorios/protector.webp';
import smart from '../img/accesorios/funda_smart.webp';
import funda2 from '../img/accesorios/funda2.webp';
import funda3 from '../img/accesorios/funda3.webp';
import funda4 from '../img/accesorios/funda4.webp';
import funda5 from '../img/accesorios/funda5.webp';
import funda6 from '../img/accesorios/funda6.webp';
import funda7 from '../img/accesorios/funda7.webp';
import funda8 from '../img/accesorios/funda8.webp';
import funda9 from '../img/accesorios/funda9.webp';
import watch1 from '../img/accesorios/watch1.webp';
import watch2 from '../img/accesorios/watch2.webp';
import buds1 from '../img/accesorios/buds1.webp';
import buds2 from '../img/accesorios/buds2.webp';
import cargador1 from '../img/accesorios/cargador1.webp';
import cargador2 from '../img/accesorios/cargador2.webp';
import cargador3 from '../img/accesorios/cargador3.webp';
import cargador4 from '../img/accesorios/cargador4.webp';
export const Accesorios =() =>{
    AOS.init();
    return(
        <div>
            <div className="fondo18" id="">
                <Navbar/>
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-around text-center">
                            <div className="col-md-4 align-self-center" data-aos="fade-down" data-aos-duration="3000">
                                <img src={modelo1} alt="" className="img-fluid mx-auto d-block"/>
                            </div>
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-2 text-uppercase">Accesorios</h1>
                                <p className='lead'>*Los accesorios se venden por separado. La disponibilidad de modelos y colores puede variar en funci??n del pa??s o proveedor de servicio.
                                    <br/>*La imagen es simulada y se usa con fines ilustrativos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo19" id="">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-10 align-self-center border-text mb-3 text-center"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-2 text-uppercase">Todo lo que necesitas para tu nuevo tel??fono ??pico</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>Protector de pantalla</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-5 text-center align-self-center'>
                            <p className='lead'>Cortada para tu tel??fono, esta pel??cula transparente y altamente sensible protege tu dispositivo de rayones, polvo y raspaduras, y funciona con huellas ultras??nicas. Adem??s, el aplicador incluido facilita la colocaci??n.</p>
                        </div>
                        <div className='col-md-7 text-center align-self-center'>
                            <img src={protector} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo20" id="">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-10 align-self-center border-text mb-3 text-center"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-3 text-uppercase">Protege tu tel??fono y llama la atenci??n</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>ESTUCHES</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda Smart LED View</b></h1>
                            <p className='lead'>Ve las alertas de llamadas y mensajes de texto en la funda LED usando los ??conos que elijas. ??brelo para encontrar un bolsillo hecho para tus tarjetas bancarias o de viaje.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={smart} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda Smart Clear View Cover</b></h1>
                            <p className='lead'>La pantalla te permite responder llamadas, pausar tu m??sica y m??s, sin siquiera tener que abrir el tel??fono.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda2} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda Silicone Cover con correa</b></h1>
                            <p className='lead'>Disfruta del agarre de silicona suave y una correa en la parte posterior que lo mantiene firme en tu mano. Cambia el estilo intercambiando la correa.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda3} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda protectora Standing</b></h1>
                            <p className='lead'>A prueba de ca??das para mantener tu tel??fono seguro. Un soporte sostiene tu tel??fono a 45 o 60 grados y se desprende para que puedas agregar un nuevo aspecto.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda4} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda de piel</b></h1>
                            <p className='lead'>Llama la atenci??n con cuero genuino. La funda flexible y delgada protege los costados y la parte posterior de tu tel??fono, y luce ve bien en toda ocasi??n.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda5} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda Silicone Cover</b></h1>
                            <p className='lead'>Suave y terso con un agarre c??modo que dura horas. La funda ajustada protege tu tel??fono y viene en una amplia gama de colores.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda6} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda transparente</b></h1>
                            <p className='lead'>El material delgado y resistente de la funda y el paragolpes resiliente protegen tu tel??fono y, al mismo tiempo, muestran el dise??o. Agrega calcoman??as para enfatizar tu estilo personal.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda7} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda Frame Cover</b></h1>
                            <p className='lead'>Viene con un armaz??n y dos placas posteriores: una reflejante y otra transparente. C??mbialas cuando quieras para obtener dos aspectos diferentes.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda8} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Funda Clear Standing</b></h1>
                            <p className='lead'>Presume y mant??n seguro tu tel??fono con un reverso fuerte y transparente y lados resilientes, mientras que una bisagra de tope libre te permite elegir el ??ngulo que funciona mejor.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={funda9} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo21" id="">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-10 align-self-center border-text mb-3 text-center"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-3 text-uppercase">Sincron??zate con un estilo de vida m??s conveniente</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>ELEMENTOS ESENCIALES</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={watch1} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Galaxy Watch4</b></h1>
                            <p className='lead'>Obt??n un entrenador de bienestar y acondicionamiento f??sico que te gu??a desde la mu??eca. Realiza f??cilmente un seguimiento de los entrenamientos y la salud con un estilo refinado.</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={watch2} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Galaxy Watch4 Classic</b></h1>
                            <p className='lead'>Realiza un seguimiento de tu salud y bienestar f??cilmente con un estilo atemporal y la comodidad de un bisel giratorio. El reloj te gu??a durante todo el d??a y se adapta perfectamente a tu estilo diario</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={buds1} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Galaxy Buds2</b></h1>
                            <p className='lead'>Sum??rgete en tu mundo con una incre??ble calidad de sonido, cancelaci??n de ruido y configuraciones de audio personalizadas que te permiten controlar lo que escuchas. Sintoniza el mundo real y sintoniza un nuevo mundo de audio.</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={buds2} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Galaxy Buds Pro</b></h1>
                            <p className='lead'>Escucha lo mejor de tu mundo, con un sonido envolvente como nunca antes. Los aud??fonos Galaxy Buds Pro te permiten controlar lo que escuchas, para que puedas o??r tu m??sica sin ruido o dejar que el exterior entre a tus o??dos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fondo22" id="">
                <div className="container-fluid fon2 py-0 mb-0">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white ">
                        <div className="row align justify-content-around">
                            <div className="col-md-10 align-self-center border-text mb-3 text-center"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-3 text-uppercase">Asi??ntalo. Ench??falo. Enci??ndelo</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-azul mb-0 text-white" id="seccion1">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <h1 className='display-4'><b>CARGADORES</b></h1>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Cargador Super Fast Wireless Charger Duo</b></h1>
                            <p className='lead'>Carga dos dispositivos a la vez. El factor de forma delgado tiene dos puntos de conexi??n para tu tel??fono o buds m??s un im??n en un lado para mantener el Galaxy Watch en su lugar. El sistema de enfriamiento por ventilador incorporado permite una carga r??pida con menos consumo de energ??a.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={cargador1} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Cargador inal??mbrico Super Fast</b></h1>
                            <p className='lead'>La forma delgada incluye una capacidad de carga r??pida de 15 W en el interior. El sistema de enfriamiento de ventilador incorporado utiliza menos energ??a para evitar que tu tel??fono se caliente demasiado mientras se carga en un instante</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={cargador2} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>

                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Adaptador de corriente de 45 W</b></h1>
                            <p className='lead'>Recarga tu Galaxy S22+ en un instante con la potencia de carga r??pida de 45 W.5 Tambi??n puedes cargar otros dispositivos r??pidamente. Y est?? hecho para mantener tu tel??fono seguro.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={cargador3} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>

                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <h1 className='display-5 border-text mb-3'><b>Adaptador de corriente Trio Power Adapter de 65 W</b></h1>
                            <p className='lead'>Carga hasta tres dispositivos con un adaptador delgado. La potencia m??xima total de 65 W puede cargar tu dispositivo por completo a toda velocidad.6 Adem??s, con dos puertos USB Type-C y un puerto USB Type-A, puedes cargar todos los dispositivos de tu hogar.</p>
                        </div>
                        <div className='col-md-6 text-center align-self-center'>
                            <img src={cargador4} className="img-thumbnail mx-auto d-block mb-3" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}