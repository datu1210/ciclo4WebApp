import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import andrea from "../img/andrea.jpg";
import felipe from "../img/felipe.jpg";
import david from "../img/david.jpg";
import daniela from "../img/daniela.jpg";
import './Testimonios.css'




import "./Testimonios.css";

export default class Testimonios extends Component {
  render() {
    return (        
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src={andrea} alt="1" />
          <div className="myCarousel">
            <h2>Andrea </h2>
            <h4>Ingeniera</h4>
            <p>
              Gracias a TrainPro, logre obtener un puntaje en  mis pruebas, que me dio la oportunidad de continuar mi preparación academica con una beca que recibí de mi universidad.
            </p>
          </div>
        </div>

        <div>
          <img src={felipe} alt="2" />
          <div className="myCarousel">
            <h2>Felipe</h2>
            <h4>Abogado</h4>
            <p>
              Despues de realizar mis pruebas SaberPro, preparado con esta herramienta me sentía muy seguro para enfrentarme al mundo laboral, hoy dirijo una oficina de Abogados.
            </p>
          </div>
        </div>

        <div>
          <img src={daniela} alt="3" />
          <div className="myCarousel">
            <h2>Daniela</h2>
            <h4>Arquitecta</h4>
            <p>
              TrainPro me ayudo me permitión concentrarme en mi proyecto de grado, ya que me daba la oportunidad de entrenar en cualquier momento libre que tenía, mis resultados fueron mejor de lo que esperaba.
            </p>
          </div>
        </div>


        <div>
          <img src={david} alt="5" />
          <div className="myCarousel">
            <h2>David</h2>
            <h4>Administrador</h4>
            <p>
              Gracias a TrainPro logré unos resultados excepcionales en mis pruebas, una interfaz amigable, preguntas actualizadas, lo mejor fue los resportes y el acompañamiento.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}