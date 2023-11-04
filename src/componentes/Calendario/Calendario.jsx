import { useEffect, useState } from "react";
import { Accordion, Spinner } from "react-bootstrap";

export default function Fetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setDatos] = useState(null);

  useEffect(() => {
    fetch('https://aitorsanrod.github.io/jsonfiles/calendario.json')
      .then((response) => response.json())
      .then((datos) => {
        setDatos(datos);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {
        isLoading ?
          <div className="text-center my-5">
            <Spinner variant="warning" />
          </div> :
          <>
            <h3 className="my-4 text-center">Calendario</h3>
            <Accordion>
              {
                data.map((data, idx) => {
                  return (
                    <Accordion.Item key={idx} eventKey={idx} style={{ backgroundColor: "#1e1e1e00" }}>
                      <Accordion.Header>
                        <span className="d-flex" style={{ color: "#dcdcdc" }}>Jornada {data.jornada}{
                          data.fecha.includes("Abierto") ?
                            <p className="text-center mx-2" style={{ color: "green" }}>{data.fecha.toUpperCase()}</p> :
                            <p className="text-center mx-2" style={{ color: "red" }}>{data.fecha.toUpperCase()}</p>}
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        {data.partidos.map(
                          (partido, idx) => {
                            return (
                              <p key={idx} style={{ color: "#dcdcdc" }} className="my-3 text-center">
                                {partido.parejas} {
                                  partido.estado.includes("Jugado") || partido.estado.includes("Descanso") ?
                                    <p className="text-center" style={{ color: "green" }}>{partido.estado.toUpperCase()}</p> :
                                    <p className="text-center" style={{ color: "red" }}>{partido.estado.toUpperCase()}</p>
                                }
                              </p>
                            )
                          }
                        )}

                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </>
      }
    </>
  );
}