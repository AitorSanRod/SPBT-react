import Boton from "../Boton/Boton";
import Marca from "../Marca/Marca";

export default function Cabecera({ changeVisibilityPortada, changeVisibilityRanking, changeVisibilityCalendario, changeVisibilityParejas }) {
  const linkPortada = "https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/hogar_skqqnv.png";
  const linkRanking = "https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/trofeo_ui4ond.png";
  const linkCalendario = "https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/calendario-reloj_uocicx.png";
  const linkParejas = "https://res.cloudinary.com/dodq6s1fh/image/upload/v1686249249/SPBT2/bola_zh2new.png";
  const datosMenuPC = [
    {
      titulo: "Portada",
      enlace: linkPortada,
      setVisibility : changeVisibilityPortada
    },
    {
      titulo: "Ranking",
      enlace: linkRanking,
      setVisibility : changeVisibilityRanking
    },
    {
      titulo: "Calendario",
      enlace: linkCalendario,
      setVisibility : changeVisibilityCalendario
    },
    {
      titulo: "Equipos",
      enlace: linkParejas,
      setVisibility : changeVisibilityParejas
    },
  ];

  return (
    <div className="row border-bottom" id="cajaMenu">
      <div className="col-5 col-lg-5 col-sm-11">
        <Marca />
      </div>
      <div className="col-7 col-lg-7 d-lg-flex d-sm-none d-flex justify-content-center align-items-center">
        {
          datosMenuPC.map((data, idx) => {
            return (<Boton nombre={data.titulo} imagen={data.enlace} key={idx} setVisibility={data.setVisibility}/>)
          })
        }
      </div>
    </div>
  )
}