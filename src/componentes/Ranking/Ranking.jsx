import { Spinner, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Ranking() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setDatos] = useState(null);

  useEffect(() => {
    fetch('https://aitorsanrod.github.io/jsonfiles/jugadores.json')
      .then((response) => response.json())
      .then((datos) => {
        datos.sort((a, b) => b.puntos - a.puntos);
        setDatos(datos);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner variant="warning" />
      </div>
    )
  }

  return (
    <>
      {
        isLoading ?
          <div className="text-center my-5">
            <Spinner variant="warning" />
          </div> :
          <>
            <h3 className="text-center my-4">Ranking individual</h3>
            <Table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" className="col col-1">Posición</th>
                  <th scope="col" className="col col-5">Nombre</th>
                  <th scope="col" className="col col-2">Puntos</th>
                  <th scope="col" className="col col-2">Partidos jugados</th>
                  <th scope="col" className="col col-2">Partidos ganados</th>
                </tr>
              </thead>
              <tbody id="tabla">
                {
                  data.map((data, idx) => {
                    return (
                      <tr key={idx}>
                        <th className="align-middle">{idx + 1}</th>
                        <td className="align-middle">{data.nombre}</td>
                        <td className="align-middle">{data.puntos}</td>
                        <td className="align-middle">{data.partidosJugados}</td>
                        <td className="align-middle">{data.partidosGanados}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </>
      }
    </>
  )
}