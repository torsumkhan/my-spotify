import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import "./nav.css";

const Nav = ({ setLibraryOpen, LibraryOpen }) => {
  return (
    <nav>
      <h1>
        {" "}
        <FontAwesomeIcon icon={faSpotify} /> mySpotify
      </h1>
      <button
        onClick={() => {
          setLibraryOpen(!LibraryOpen);
        }}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
