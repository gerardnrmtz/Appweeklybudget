import React, { Fragment, useState } from "react";
import Error from './Error.js';

function Pregunta(props) {
    const {guardarPresupuesto,guardarPreguntaPresupuesto,guardarRestante}=props;
  //definir el state

  const [cantidad, guardarCantidad] = useState(0);
  const [error,guardarError]=useState(false);

  const handleSubmit = e=>{
      e.preventDefault();
      if(cantidad<1||isNaN(cantidad)){
          guardarError(true);
          return;
      }
      guardarError(false);
      guardarPresupuesto(cantidad);
      guardarRestante(cantidad);
      guardarPreguntaPresupuesto(false);
      //si se pasa la validacion


  }
  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error? <Error mensaje='El presupuesto es Incorrecto'/> :null}
      <form
        onSubmit={handleSubmit}>
        <input
          type="text"
          className="u-full-width"
          placeholder="Agrega tu presupuesto"
          onChange={e=>guardarCantidad(parseInt(e.target.value,10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}
export default Pregunta;
