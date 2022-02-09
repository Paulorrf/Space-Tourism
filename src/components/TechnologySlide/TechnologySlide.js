import React, { useState, useEffect } from "react";

import {
  CrewContainer,
  Name,
  Description,
  NavList,
  Circle,
  Imagem,
} from "./TechnologySlide.elements";

import exactPosition from "../../util/exactPosition";

const TechnologySlide = ({ techVehicle, setPosition }) => {
  const [color, setColor] = useState([true, false, false]);
  const [widthInner, setWidthInner] = useState(window.innerWidth);

  // function exactPosition(index) {
  //   setPosition(index);

  //   let arr = [false, false, false];
  //   arr[index] = true;
  //   setColor(arr);
  // }

  const handleWidth = () => {
    const position = window.innerWidth;
    setWidthInner(position);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth, { passive: true });

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <CrewContainer>
      <Imagem
        src={widthInner > 700 ? techVehicle.imagemBg : techVehicle.imagemSm}
        alt={techVehicle.name}
        widthInner={widthInner}
      />
      <NavList>
        <li onClick={() => exactPosition(0, setColor, setPosition)}>
          <Circle cor={color[0]}>1</Circle>
        </li>
        <li onClick={() => exactPosition(1, setColor, setPosition)}>
          <Circle cor={color[1]}>2</Circle>
        </li>
        <li onClick={() => exactPosition(2, setColor, setPosition)}>
          <Circle cor={color[2]}>3</Circle>
        </li>
      </NavList>
      <Name>{techVehicle.name}</Name>
      <Description>{techVehicle.description}</Description>
    </CrewContainer>
  );
};

export default TechnologySlide;
