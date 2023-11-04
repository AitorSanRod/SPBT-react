import { Image } from "react-bootstrap";

export default function Boton({ nombre, imagen, setVisibility }) {
    return (
        <div className="col-3 mx-1" onClick={setVisibility}>
            <a href="#" className="nav-link fs-5 text-light d-flex flex-column justify-content-center align-items-center blur-out p-3 rounded">
                <Image src={imagen} className="img-fluid" alt="" />
                <p className="text-center fw-medium my-1">{nombre}</p>
            </a>
        </div>
    )
}