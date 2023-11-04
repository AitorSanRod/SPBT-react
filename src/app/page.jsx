"use client"

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from '@/componentes/Cabecera/Cabecera';
import './estilo.css';
import Pie from '@/componentes/Pie/Pie';
import Clasificacion from '@/componentes/Clasificacion/Clasificacion';
import Ranking from '@/componentes/Ranking/Ranking';
import Calendario from '@/componentes/Calendario/Calendario';

export default function Home() {
  const [showPortada, setShowPortada] = useState(true);
  const [showRanking, setShowRanking] = useState(false);
  const [showCalendario, setShowCalendario] = useState(false);
  const [showParejas, setShowParejas] = useState(false);

  function changeVisibilityPortada() {
    setShowPortada(true);
    setShowRanking(false);
    setShowCalendario(false);
    setShowParejas(false);
  }

  function changeVisibilityRanking() {
    setShowPortada(false);
    setShowRanking(true);
    setShowCalendario(false);
    setShowParejas(false);
  }

  function changeVisibilityCalendario() {
    setShowPortada(false);
    setShowRanking(false);
    setShowCalendario(true);
    setShowParejas(false);
  }

  function changeVisibilityParejas() {
    setShowPortada(false);
    setShowRanking(false);
    setShowCalendario(false);
    setShowParejas(true);
  }

  return (
    <div className='container'>
      <Cabecera changeVisibilityPortada={changeVisibilityPortada} changeVisibilityRanking={changeVisibilityRanking} changeVisibilityCalendario={changeVisibilityCalendario} changeVisibilityParejas={changeVisibilityParejas} />
      {showPortada && <Clasificacion />}
      {showRanking && <Ranking />}
      {showCalendario && <Calendario />}
      {showParejas && <h1>parejas</h1>}
      <Pie />
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Mod show={show} handleClose={handleClose} /> */}
    </div>
  )
}
