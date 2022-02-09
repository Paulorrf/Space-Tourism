import React from "react";

import { PlanetsNav } from "../index";

//estilos
import {
  PlanetImg,
  ContainerStyled,
  PlanetDiv,
  PlanetInfo,
  RowDiv,
  Description,
} from "./Planets.elements";

import marsImg from "../../assets/destination/image-mars.webp";

const Moon = () => {
  return (
    <ContainerStyled>
      <PlanetDiv>
        <PlanetImg src={marsImg} alt="moon" />
      </PlanetDiv>

      <PlanetInfo>
        <PlanetsNav />
        <h2>MARS</h2>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          rutrum est. Sed fringilla id nisi nec vehicula. Sed viverra orci eu
          eleifend malesuada. Morbi in enim augue. Morbi eu libero fringilla,
          accumsan odio eget, venenatis enim. Duis finibus orci quis velit
          accumsan, id feugiat magna rutrum.
        </Description>

        <RowDiv />

        <div>
          <p>AVG, DISTANCE</p>
          <p>225 MIL. KM</p>
        </div>
      </PlanetInfo>
    </ContainerStyled>
  );
};

export default Moon;
