import React, { useState, useEffect } from 'react'
/* import "./PreguntaEstilos.css" */

const preguntas = [

  {

    "id": "1",

    "categoria": "Razonamiento cuantitativo",

    "encabezado": "Este es el encabezado de la pregunta",

    "opciona": "123",
    "opcionb": "456",
    "opcionc": "789",
    "opciond": "000"

  },

  {

    "id": "2",

    "categoria": "Comprensión lectora",

    "encabezado": "Este es el encabezado de la pregunta CL",

    "opciona": "321",
    "opcionb": "654",
    "opcionc": "357",
    "opciond": "090"

  },

  {

    "id": "3",

    "categoria": "Inglés",

    "encabezado": "Este es el encabezado de la pregunta Inglés",

    "opciona": "999",
    "opcionb": "222",
    "opcionc": "111",
    "opciond": "300"

  },

  {

    "id": "4",

    "categoria": "Competencias ciudadanas",

    "encabezado": "Este es el encabezado de la pregunta CC",

    "opciona": "989",
    "opcionb": "333",
    "opcionc": "444",
    "opciond": "555"

  }

]

export default function Pregunta() {

  const [index, setIndex] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);
  const next = () => {
    setIndex((i) => (i + 1) % preguntas.length);
  };
  const prev = () => {
    setIndex(
      (i) => (((i - 1) % preguntas.length) + preguntas.length) % preguntas.length
    );
  };
  const onClickOutside = (e) => {
    if (e.target.localName !== "button") {
      setDisplayModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  return (


    <div className="container">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>


      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header table-dark" style={{ backgroundColor: "#182434" }}>
              <h5 className="modal-title" id="staticBackdropLabel"> {preguntas[index].categoria}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="form-check">
              <p>{preguntas[index].encabezado}</p>
            </div>
              <div className="form-check">
                <label>
                  <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                  A. {preguntas[index].opciona}
                </label>
              </div>
              <hr />
              <div className="form-check">
                <label>
                  <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                  B. {preguntas[index].opcionb}
                </label>
              </div>
              <hr />
              <div className="form-check">
                <label>
                  <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                  C. {preguntas[index].opcionc}
                </label>
              </div>
              <hr />
              <div className="form-check">
                <label>
                  <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                  D. {preguntas[index].opciond}
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button className='btn mr-1' onClick={prev}>Anterior</button>
              <button className='btn btn-warning mr-1' onClick={next}>Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
