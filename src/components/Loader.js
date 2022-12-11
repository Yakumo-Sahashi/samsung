import ico from '../img/favicon.png';
export const Loader = () => {    
    return(
        <div>
            <div className="contenedor" id="contenedor">
                <div className="loader-container">
                    <div className="loader"></div>
                    <div className="loader2"></div>
                    <img className="img-load" src={ico}/>
                </div>
            </div>
        </div>
    );
}