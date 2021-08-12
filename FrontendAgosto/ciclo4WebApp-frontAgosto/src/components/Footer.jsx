import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div  class="footer-basic">
      <div className="social">
        <a href="https://github.com/datu1210/ciclo4WebApp" target="blank">
          <i className="icon ion-social-github"></i>
        </a>
        <a href="https://dev.azure.com/favza89/Trainpro" target="blank">
          <i className="icon ion-social-windows"></i>
        </a>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#inicio">Home</a>
        </li>
        <li className="list-inline-item">
          <a href="#intro">Services</a>
        </li>
        <li className="list-inline-item">
          <a href="#about">About</a>
        </li>
        <li class="list-inline-item">
          <a href="#inicio">Privacy Policy</a>
        </li>
      </ul>
      <p className="copyright">StayTuned © 2021</p>
    </div>
  );
}
