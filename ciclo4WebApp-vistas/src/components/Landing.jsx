import React from "react";
import americano from "../img/americano.png";
import concejo from "../img/concejo.png";
import cumbres from "../img/cumbres.png";
import lasallebog from "../img/la-salle-bog.png";
import Jovenes from "../img/Jovenes.jpg";
import MinEducación_Colombia_logo from "../img/MinEducación_Colombia_logo.png";
import sanviator from "../img/san-viator.png";
import Footer from "./Footer.jsx";

import "./Landing.css";

import Nav from './Nav';

export default function Landing() {
  return (
    <>
    <Nav/>
      <section id="inicio" className="text-center">
        <div id="sliderCaption" className="carousel slide" data-ride="carousel">
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
              <img className="img-fluid w-100" src={Jovenes} alt="Jovenes-Train"/>
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
        <div className="container p-3">
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
              <img className="img-fluid" 
                src={concejo} 
                alt="Colegio_Concejo" 
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <img className="img-fluid " 
                src={cumbres} 
                alt="" 
                height="150px"
                width="150px"              
              />
            </div>
          </div>
          <div className="row text-center text-lg-left mt-5">
            <div className="col-sm-12 col-md-4">
              <img className="img-fluid" 
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
                // height="150px"
                // width="150px"                
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <img className="img-fluid" 
                src={sanviator} 
                alt=""  
                // height="150px"
                // width="150px"
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

