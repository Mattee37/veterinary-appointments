import React, { Fragment, useState, useEffect } from "react";

import Form from "./components/Form";
import Cita from "./components/Cita";

function App() {
  //LocalStorage
  let initialsCitas = JSON.parse(localStorage.getItem("citas"));
  if (!initialsCitas) {
    initialsCitas = [];
  }

  //[estados, actualizador]
  const [citas, setCitas] = useState(initialsCitas);

  //control del LocalStorage
  useEffect(
    _ => {
      let initialsCitas = JSON.parse(localStorage.getItem("citas"));
      if (initialsCitas) {
        localStorage.setItem("citas", JSON.stringify(citas));
      } else {
        localStorage.setItem("citas", JSON.stringify([]));
      }
    },
    [citas]
  );

  //copia las citas anteriores y agrega la nueva
  const createCita = cita => {
    setCitas([...citas, cita]);
  };

  //elimina la cita segun su ID
  const deleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id);
    setCitas(newCitas);
  };

  //ternario para el titulo
  const title = citas.length === 0 ? "No hay citas" : "Administrador de citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
