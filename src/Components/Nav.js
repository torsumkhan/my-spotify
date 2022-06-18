import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faSpotify } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

const Nav = ({ setLibraryOpen, LibraryOpen }) => {
  return (
    <nav>
      <h1>mySpotify</h1>
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
