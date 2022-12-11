import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../components/Navbar';
import modelo1 from '../img/samsung_s222.png';

export const Especificaciones = () => {
    AOS.init();
    return(
        <div>
            <div className="fondo24" id="">
                <Navbar/>
                <div className="container-fluid fon2 py-0 mb-0" id="home2">
                    <div className="container d-flex flex-column justify-content-center h-100 text-white text-center">
                        <div className="row align justify-content-around text-center">
                            <div className="col-md-8 align-self-center border-text"
                                data-aos="fade-up" data-aos-duration="3000">
                                <h1 className="display-3 text-uppercase">Galaxy S22 Especificaciones</h1>
                            </div>
                            <div className="col-md-4 align-self-center" data-aos="fade-down" data-aos-duration="3000">
                                <img src={modelo1} alt="" className="img-fluid mx-auto d-block"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-0 py-0 bg-transparente mb-0 text-white">
                <div className="container py-5 ">
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Procesador</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Velocidad del CPU</b></p>
                            <p className='lead'>2.99 GHz, 2.4 GHz, 1.7 GHz</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Tipo de CPU</b></p>
                            <p className='lead'>Octa-Core</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Pantalla</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Tamaño (pantalla principal)</b></p>
                            <p className='lead'>173.1 mm (6.8", rectángulo completo) / 172.5 mm (6.8", esquinas redondeadas)</p>
                            <br/>
                            <p><b>Tecnología (pantalla principal)</b></p>
                            <p className='lead'>Dynamic AMOLED 2x</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Resolución (pantalla principal)</b></p>
                            <p className='lead'>3,088 x 1,440 (Quad HD+)</p>
                            <br/>
                            <p><b>Número de colores (pantalla principal)</b></p>
                            <p className='lead'>16M</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>S Pen</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Sí</b></p>
                            <p className='lead'></p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Cámara</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Cámara trasera - Resolución (múltiple)</b></p>
                            <p className='lead'>108 MP + 10 MP + 12 MP + 10 MP</p>
                            <br/>
                            <p><b>Cámara trasera - Autoenfoque</b></p>
                            <p className='lead'>Sí</p>
                            <br/>
                            <p><b>Zoom de cámara trasera</b></p>
                            <p className='lead'>Zoom óptico de 3x y 10x, zoom digital de hasta 100x</p>
                            <br/>
                            <p><b>Cámara frontal - Número F</b></p>
                            <p className='lead'>F2.2</p>
                            <br/>
                            <p><b>Cámara trasera - Flash</b></p>
                            <p className='lead'>Sí</p>
                            <br/>
                            <p><b>Slow Motion</b></p>
                            <p className='lead'>960 fps @ HD, 240 fps @ FHD</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Cámara trasera - Número F (múltiple)</b></p>
                            <p className='lead'>F1.8, F4.9, F2.2, F2.4</p>
                            <br/>
                            <p><b>Cámara trasera - OIS</b></p>
                            <p className='lead'>Sí</p>
                            <br/>
                            <p><b>Cámara frontal - Resolución</b></p>
                            <p className='lead'>40 MP</p>
                            <br/>
                            <p><b>Cámara frontal - Autoenfoque</b></p>
                            <p className='lead'>Sí</p>
                            <br/>
                            <p><b>Resolución de grabación de video</b></p>
                            <p className='lead'>UHD 8K (7,680 x 4,320) @ 24 fps</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Memoria</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Memoria RAM (GB)</b></p>
                            <p className='lead'>8</p>
                            <br/>
                            <p><b>Memoria disponible (GB)*</b></p>
                            <p className='lead'>100.1</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Memoria interna (GB)</b></p>
                            <p className='lead'>128</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Redes / Bandas</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Número de SIM</b></p>
                            <p className='lead'>SIM doble</p>
                            <br/>
                            <p><b>Tipo de ranura SIM</b></p>
                            <p className='lead'>SIM 1 + SIM 2 o Embedded SIM</p>
                            <br/>
                            <p><b>2G GSM</b></p>
                            <p className='lead'>GSM850, GSM900, DCS1800, PCS1900</p>
                            <br/>
                            <p><b>4G FDD LTE</b></p>
                            <p className='lead'>B1 (2,100), B2 (1,900), B3 (1,800), B4 (AWS), B5 (850), B7 (2,600), B8 (900), B12 (700), B13 (700), B17 (700), B18 (800), B19 (800), B20 (800), B25 (1,900), B26 (850), B28 (700), B66 (AWS-3</p>
                            <br/>
                            <p><b>5G FDD Sub6</b></p>
                            <p className='lead'>N1 (2,100), N2 (1,900), N3 (1,800), N5 (850), N7 (2,600), N8 (900), N12 (700), N20 (800), N25 (1,900), N28 (700), N66 (AWS-3)</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Tipo de SIM</b></p>
                            <p className='lead'>Nano-SIM (4FF), SIM embebida</p>
                            <br/>
                            <p><b>Infraestructura</b></p>
                            <p className='lead'>2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6 FDD, 5G Sub6 TDD</p>
                            <br/>
                            <p><b>3G UMTS</b></p>
                            <p className='lead'>B1 (2,100), B2 (1,900), B4 (AWS), B5 (850), B8 (900)</p>
                            <br/>
                            <p><b>4G TDD LTE</b></p>
                            <p className='lead'>B38 (2,600), B39 (1,900), B40 (2,300), B41 (2,500)</p>
                            <br/>
                            <p><b>5G TDD Sub6</b></p>
                            <p className='lead'>N38 (2600), N40 (2,300), N41 (2,500), N77 (3,700), N78 (3,500)</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Conectividad</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Interfaz USB</b></p>
                            <p className='lead'>USB Tipo-C</p>
                            <br/>
                            <p><b>Localización</b></p>
                            <p className='lead'>GPS, Glonass, Beidou, Galileo, QZSS</p>
                            <br/>
                            <p><b>MHL</b></p>
                            <p className='lead'>No</p>
                            <br/>
                            <p><b>Wi-Fi Direct</b></p>
                            <p className='lead'>Sí</p>
                            <br/>
                            <p><b>NFC</b></p>
                            <p className='lead'>Si</p>
                            <br/>
                            <p><b>Sincronización con PC</b></p>
                            <p className='lead'>Smart Switch (versión PC)</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Versión de USB</b></p>
                            <p className='lead'>USB 3.2 Gen 1</p>
                            <br/>
                            <p><b>Auriculares</b></p>
                            <p className='lead'>USB Tipo-C</p>
                            <br/>
                            <p><b>Wi-Fi</b></p>
                            <p className='lead'>802.11 a/b/g/n/ac/ax 2.4 G + 5 GHz + 6 GHz, HE160, MIMO, 1024-QAM</p>
                            <br/>
                            <p><b>Versión de Bluetooth</b></p>
                            <p className='lead'>Bluetooth 5.2</p>
                            <br/>
                            <p><b>UWB (Ultra-Wideband)</b></p>
                            <p className='lead'>Sí</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Sistema operativo</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Android</b></p>
                            <p className='lead'></p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Información general</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Formato</b></p>
                            <p className='lead'>Barra táctil</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Sensores</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b></b></p>
                            <p className='lead'>Acelerómetro, Barómetro, Lector de huellas digitales, Giroscopio, Sensor geomagnético, Sensor Hall, Sensor de luz, Sensor de proximidad</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Especificaciones físicas</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Dimensiones (Al x A x P, mm)</b></p>
                            <p className='lead'>163.3 x 77.9 x 8.9</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Peso (g)</b></p>
                            <p className='lead'>228</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Batería</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Tiempo de uso en Internet (LTE) [horas]</b></p>
                            <p className='lead'>Hasta 20</p>
                            <br/>
                            <p><b>Tiempo de reproducción de video (horas, inalámbrico)</b></p>
                            <p className='lead'>Hasta 20</p>
                            <br/>
                            <p><b>Tiempo de uso en Internet (LTE) [horas]</b></p>
                            <p className='lead'>No</p>
                            <br/>
                            <p><b>Tiempo de conversación (4G LTE) [horas]</b></p>
                            <p className='lead'>Hasta 40</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Tiempo de uso en Internet (Wi-Fi) [horas]</b></p>
                            <p className='lead'>Hasta 21</p>
                            <br/>
                            <p><b>Capacidad de la batería (mAh, típica)</b></p>
                            <p className='lead'>5000</p>
                            <br/>
                            <p><b>Tiempo de reproducción de audio (horas, inalámbrico)</b></p>
                            <p className='lead'>Hasta 81</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Audio y video</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Soporte estéreo</b></p>
                            <p className='lead'>Sí</p>
                            <br/>
                            <p><b>Resolución de reproducción de video</b></p>
                            <p className='lead'>UHD 8K (7,680 x 4,320) @ 60 fps</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Formatos de reproducción de video</b></p>
                            <p className='lead'>MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM</p>
                            <br/>
                            <p><b>Formatos de reproducción de audio</b></p>
                            <p className='lead'>MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DFF, DSF, APE</p>
                        </div>
                    </div>
                    <div className="row mb-5 mt-4 justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div className='col-md-12 mb-4'>
                            <hr className="bg-light"/>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <h1 className='display-6'><b>Servicios y aplicaciones</b></h1>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Soporte Gear</b></p>
                            <p className='lead'>Galaxy Buds Pro, Galaxy Buds Live, Galaxy Buds+, Galaxy Buds2, Galaxy Buds, Galaxy Fit2, Galaxy Fit e, Galaxy Fit, Galaxy Watch4, Galaxy Watch3, Galaxy Watch, Galaxy Watch Active2, Galaxy Watch Active, Gear Fit2 Pro, Gear Fit2, Gear Sport, Gear S3, Gear S2, Gear IconX (2018)</p>
                            <br/>
                            <p><b>Televisión móvil</b></p>
                            <p className='lead'>No</p>
                        </div>
                        <div className='col-md-4 text-center align-self-center'>
                            <p><b>Soporte Samsung DeX</b></p>
                            <p className='lead'>M</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}