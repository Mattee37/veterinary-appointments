import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Form = ({ createCita }) => {
  //[estados, actualizador]
  const [cita, setCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  //[estados, actualizador]
  const [error, setError] = useState(false);

  //obtiene y actualiza los values de los keys del estado
  const handleChange = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const { mascota, dueño, fecha, hora, sintomas } = cita;

  //envalua los datos, y los envia desde el formulario
  const handleSubmit = e => {
    e.preventDefault();

    //evalua el estado
    if (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    //agrega ID
    cita.id = uuid();

    //crea nueva cita
    createCita(cita);

    //limpia el form
    setCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>Nombre de mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre"
          onChange={handleChange}
          value={mascota}
        />
        <label>Nombre del dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre"
          onChange={handleChange}
          value={dueño}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Enviar cita
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createCita: PropTypes.func.isRequired
};

export default Form;
