import React, { useState, useEffect } from 'react'

  const preguntas= [

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
        <div>
          <button onClick={() => setDisplayModal(true)}>open modal</button>
      {displayModal && (
        <div         
        >                    
          <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                            </div>
                            <div className="table-responsive-lg">
                            <table className="table  table-striped card-text"> 
                                <thead className='table-dark'>
                                    <tr>
                                        <th>{preguntas[index].encabezado}</th>                                                                              
                                    </tr>
                                </thead>
                                <tbody>                                                                   
                                            <tr key={preguntas[index].id}>
                                            <tr>
                                            <div className="mb-3">
                                             <div className="form-check">
                                            <label>
                                            <input type="radio" name="react-tips" value="option1" checked={false} className="form-check-input"/>
                                            A. {preguntas[index].opciona}
                                            </label>
                                            </div>
                                            </div>
                                            </tr>

                                            <tr>
                                            <div className="mb-3">
                                             <div className="form-check">
                                            <label>
                                            <input type="radio" name="react-tips" value="option1" checked={false} className="form-check-input"/>
                                            A. {preguntas[index].opcionb}
                                            </label>
                                            </div>
                                            </div>
                                            </tr>

                                            <tr>
                                            <div className="mb-3">
                                             <div className="form-check">
                                            <label>
                                            <input type="radio" name="react-tips" value="option1" checked={false} className="form-check-input"/>
                                            A. {preguntas[index].opcionc}
                                            </label>
                                            </div>
                                            </div>
                                            </tr>

                                            <tr>
                                            <div className="mb-3">
                                             <div className="form-check">
                                            <label>
                                            <input type="radio" name="react-tips" value="option1" checked={false} className="form-check-input"/>
                                            A. {preguntas[index].opciond}
                                            </label>
                                            </div>
                                            </div>
                                            </tr>

                                                                                                                                          
                                            </tr> 
                                            <tr>
                                            <div className="mb-3">
                                             <div className="form-check">
                                                    <button className='btn btn-warning mr-1' onClick={next}>Siguiente</button>
                                            </div>
                                            </div>                                                    
                                            </tr>                                                                  
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>

            </div>          
        </div>
      )}
                        
        </div>
    )
}
