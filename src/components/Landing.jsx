import React from "react";
import trainpro from "../img/TrainPro.png";
import americano from "../img/americano.png";
import concejo from "../img/concejo.png";
import cumbres from "../img/cumbres.png";
import lasallebog from "../img/la-salle-bog.png";
import Jovenes from "../img/Jovenes.jpg";
import MinEducación_Colombia_logo from "../img/MinEducación_Colombia_logo.png";
import sanviator from "../img/san-viator.png";

import "./Landing.css";

export default function Landing() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fondo-nav sticky-top"
        style={{background:"white"}}
        id="menu-navegacion"
      >
        <div className="container my-1">
          <a href="index.html" className="navbar-bran">
            <img
              src={trainpro}
              alt=""
              className="img-fluid"
              height="150px"
              width="150px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#inicio active" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#intro" className="nav-link">
                  Empresa
                </a>
              </li>
              <li className="nav-item">
                <a href="#servicios" className="nav-link">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonios" className="nav-link">
                  Testimonios
                </a>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a href="login" className="nav-link">
                  Iniciar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="inicio" className="text-center">
        <div
          id="sliderCaption"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              className="active"
              data-target="#sliderCaption"
              data-slide-to="0"
            ></li>
            <li data-target="#sliderCaption" data-slide-to="1"></li>
            <li data-target="#sliderCaption" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            {/* imagenes */}
            <div className="carousel-item active">
              <img className="img-fluid" src={Jovenes} alt="Jovenes-Train" />
              <div class="carousel-caption d-none d-md-block">
                <h2>Dispositiva 1</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
                  magni?
                </p>
              </div>
            </div>
          </div>

          <a
            href="#sliderCaption"
            className="carousel-control-prev"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            href="#sliderCaption"
            className="carousel-control-next"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>

      <section id="llamado-accion-1">
        <div className="container p-3"  >
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <h5 id="action1-color" className="p-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis quibusdam officiis alias aliquam esse, quos sunt
                dolor iusto consequuntur consectetur
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section id="intro">
        <div className="container">
          <h1 className="text-center mt-5">¿Porque TrainPro?</h1>
          <h3 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eligendi ratione rerum adipisci! Illum, possimus!
          </h3>
          <div className="container">
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4">
                <h3 className="mt-5 ml-3 text-left">TOPIC 1</h3>
                <p className="m-5 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  aspernatur perferendis itaque fuga, ratione, ullam repellat
                  illum earum dignissimos sunt eaque nulla dolores reiciendis
                  quia eius nihil nisi!
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h3 className="mt-5 ml-3 text-left">TOPIC 2</h3>
                <p className="m-5 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis at ut ipsum sed repudiandae nesciunt modi dolores
                  accusamus, rerum quisquam ipsa quo deserunt aperiam? Molestias
                  cupiditate eaque animi.
                </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h3 className="mt-5 ml-3 text-left">TOPIC 3</h3>
                <p className="m-5 mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum magni illo incidunt. Voluptas tempora ex aut non
                  veritatis odit. Praesentium architecto repudiandae deserunt
                  officiis odit ut ipsam libero?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-12 col-md-7 text-center ml-5">
              <h1 className="mt-5 text-white">SOBRE NOSOTROS</h1>
              <p className="mt-3 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                numquam ab recusandae nam temporibus dignissimos quasi. Tenetur
                assumenda maxime quisquam recusandae accusantium repellat saepe
                rem cupiditate magnam necessitatibus vitae veniam aut suscipit,
                veritatis aperiam mollitia cum est facilis at, molestiae
                eligendi nobis eum dolore officia. Quibusdam fugiat cumque
                architecto in sit a assumenda placeat excepturi asperiores odio
                eligendi, consequatur suscipit aliquam at vel fugit perferendis
                saepe reprehenderit itaque! Ut, delectus.
              </p>
              <button
                id="btn-about"
                className="btn mb-5 mt-2 btn-lg text-center"
              >
                Más Información
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria">
        <div className="container mt-5">
          <h1 className="mt-5 mb-5 text-center">Thumbnail Gallery</h1>

          <div className="row text-center text-lg-left">
            <div className="col-lg-3 col-md-4 col-6">
              <img
                className="img-fluid card-img-top"
                src={americano}
                alt="Colegio_Americano"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <img className="img-fluid" src={concejo} alt="Colegio_Concejo" />
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <img className="img-fluid " src={cumbres} alt="" />
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <img className="img-fluid" src={lasallebog} alt="" />
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <img
                className="img-fluid"
                src={MinEducación_Colombia_logo}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <img className="img-fluid" src={sanviator} alt="" />
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

      <footer>
        <section id="footer">
          <div className="container py-3">
            <div className="row mt-5">
              <div className="col-sm-12 col-md-4 tex-center text-white">
                <h3 className="mt-5">Nosotros</h3>
                <p className="mt-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Culpa consequatur sit omnis saepe expedita, quibusdam numquam
                  consectetur minus tempora delectus.
                </p>
                <p>@2021. Todos los derechos reservados</p>
              </div>

              <div className="col-sm-12 col-md-4 tex-center text-white">
                <h3 className="mt-5">Contáctanos</h3>
                <p className="mt-5">
                  <i className="fas fa-map-marker-alt"></i>
                  Avenida Siempre Viva 123
                  <br />
                  <br />
                  <i className="fas fa-phone"></i>
                  57 5555555
                </p>
              </div>

              <div class="col-sm-12 col-md-4 tex-center text-white">
                <h3 class="mt-5">Suscríbete</h3>
                <form>
                  <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Ingresa tu email"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Suscríbete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
