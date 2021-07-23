import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, deleteCita }) => {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{cita.mascota}</span>
      </p>
      <p>
        Dueño: <span>{cita.dueño}</span>
      </p>
      <p>
        Fecha: <span>{cita.fecha}</span>
      </p>
      <p>
        Hora: <span>{cita.hora}</span>
      </p>
      <p>
        Sintomas: <span>{cita.sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={_ => deleteCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  deleteCita: PropTypes.func.isRequired
};

export default Cita;