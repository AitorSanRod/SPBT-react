import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";

export default function Fetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setDatos] = useState(null);

  useEffect(() => {
    fetch('https://aitorsanrod.github.io/jsonfiles/parejas.json')
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
    <div>
      {
        isLoading ?
          <div className="text-center my-5">
            <Spinner variant="warning" />
          </div> :
          <>
            <h3 className="text-center my-4">Clasificación</h3>
            <Table className="table table-hover">
              <thead>
                <tr>
                  <th className="col col-1 col-lg-1 col-md-1 col-sm-1">Posición</th>
                  <th className="col col-7 col-lg-7 col-md-7 col-sm-7">Pareja</th>
                  <th className="col col-2 col-lg-2 col-md-2 col-sm-2">Ganados</th>
                  <th className="col col-2 col-lg-2 col-md-2 col-sm-2">Puntos</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((data, idx) => {
                    return (
                      <tr key={idx}>
                        <th className="align-middle">{idx + 1}</th>
                        <td className="align-middle">{data.pareja}</td>
                        <td className="align-middle">{data.partidosGanados}</td>
                        <td className="align-middle">{data.puntos}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </>
      }
    </div>
  );
}