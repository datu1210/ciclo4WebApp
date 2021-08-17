import React from "react";
import americano from "../img/americano.png";
import concejo from "../img/concejo.png";
import cumbres from "../img/cumbres.png";
import lasallebog from "../img/la-salle-bog.png";
import MinEducación_Colombia_logo from "../img/MinEducación_Colombia_logo.png";
import sanviator from "../img/san-viator.png";
import Footer from "./Footer.jsx";
import Nav from "./Nav";

import "./Landing.css";



export default function Landing() {
  return (
    <>
      <Nav />
      <section id="inicio" className="text-center">
        <div class="jumbotron">
          <h1 class="display">
            <strong>IMAGINA TU FUTURO PROFESIONAL</strong>
          </h1>
          <h3 class="display">
            <strong>Nosotros te apoyamos para hacerlo realidad</strong>
          </h3>
        </div>
      </section>

      <section id="llamado-accion-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <h5 id="action1-color" className="m-5">
                TrainPro es el simulador lider en entremamiento de las pruebas
                saberPRO, entrena con nosotros todas las competencias y aumenta tus
                posibilidades de obtener el mejor resultado
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section id="intro">
        <div id="intro-container" className="container-fluid">
          <h1 className="text-center mt-5">¿Porque TrainPro?</h1>
          <h4 className="text-center m-5">
            TrainPro es el simulador lider en entremamiento de las pruebas
            saberPRO, entrena con nosotros todas las competencias y aumenta tus
            posibilidades de obtener el mejor resultado
          </h4>
          <div className="container-fluid">
            <div  className="row mt-3">
              <div id="razon1" className="col-sm-12 col-md-4">
                <h3 className="mt-5 ml-3 text-left">Mas Preguntas</h3>
                <p className="m-5">
                  Tendrás acceso a un banco de preguntas actualizado, con las
                  cuales podrás conocer tus fortalezas y debilidades en las
                  áreas de tu preferencia.
                </p>
              </div>
              <div id="razon2" className="col-sm-12 col-md-4">
                <h3 className="mt-5 ml-3 text-left">100% On-line</h3>
                <p className="m-5">
                  Tendrás la opción de entrenar sin horarios y a podrás hacerlo
                  a tu propio ritmo. La plataforma está a tu disposición 24/7
                  durante el tiempo que estés activo.
                </p>
              </div>
              <div id="razon3" className="col-sm-12 col-md-4">
                <h3 className="mt-5 ml-3 text-left">Personalizado</h3>
                <p className="m-5">
                  Posiblidad de exportar informes académicos donde un tutor o
                  profesor te ayudará a identificar competencias débiles, según
                  tus resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 text-center ml-5">
              <h1 className="mt-5 text-white">SOBRE NOSOTROS</h1>
              <p className="mb-5 text-white">
                TrainPro es una plataforma de entrenamiento educativo, nuestro
                objetivo es ayudar a los jóvenes e instituciones a mejorar sus
                posibilidades de obtener mejores resultados en las pruebas Saber
                Pro, exigidas por el icfes para garantizar la buena preparación
                de los egresados de estudios superiores.
                <br></br>
                TrainPro, está compuesto por un grupo de competencias genéricas
                y evalúa cuatro módulos genéricos: Lectura Crítica, Razonamiento
                Cuantitativo, Competencias Ciudadanas e
                Inglés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria">
        <div className="container mt-5">
          {/* <h1 className="mt-5 mb-5 text-center">Thumbnail Gallery</h1> */}

          <div className="row text-center text-lg-left">
            <div className="col-sm-12 col-md-4">
              <img
                className="img-fluid"
                src={americano}
                alt="Colegio_Americano"
                height="130px"
                width="130px"
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <img
                className="img-fluid"
                src={concejo}
                alt="Colegio_Concejo"
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <img
                className="img-fluid "
                src={cumbres}
                alt=""
                height="150px"
                width="150px"
              />
            </div>
          </div>
          <div className="row text-center text-lg-left mt-5">
            <div className="col-sm-12 col-md-4">
              <img
                className="img-fluid"
                src={lasallebog}
                alt=""
                height="150px"
                width="150px"
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <img
                className="img-fluid"
                src={MinEducación_Colombia_logo}
                alt=""
                // height = "150px"
                // width = "150px"
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <img
                className="img-fluid"
                src={sanviator}
                alt=""
                // height = "150px"
                // width = "150px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonios">
        <div className="container mb-5">
          <h1 className="text-center mt-5">Testimonios</h1>
          <div className="row mt-5">
            <div className="col-sm12 col-md-6 text-center">
              <div className="card">
                <div className="card-body">
                  <p className="mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta est laudantium quidem adipisci reiciendis sed minima
                    expedita sunt?
                  </p>
                  <cite>
                    <strong>Jon Doe</strong>
                  </cite>
                </div>
              </div>
            </div>

            <div className="col-sm12 col-md-6 text-center">
              <div className="card">
                <div className="card-body">
                  <p className="mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta est laudantium quidem adipisci reiciendis sed minima
                    expedita sunt?
                  </p>
                  <cite>
                    <strong>Jon Doe</strong>
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
