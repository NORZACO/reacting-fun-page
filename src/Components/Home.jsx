import React from "react";
// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// jquery
import "jquery/dist/jquery.min.js";

import "../assets/css/home.css";
import ListLink from "../Components/ListLink";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Welcome to Home </h1>
        </div>
        <ListLink />
      </div>
    </>
  );
}
