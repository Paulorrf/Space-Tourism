import React, { useState } from "react";

import {
  CrewContainer,
  Profession,
  Name,
  Description,
  NavList,
  Circle,
  Imagem,
} from "./CrewSlide.elements";

import exactPosition from "../../util/exactPosition";

const CrewSlide = ({ member, setPosition }) => {
  //true, so the first circle starts white
  const [color, setColor] = useState([true, false, false, false]);

  // function exactPosition(index) {
  //   setPosition(index);

  //   let arr = [false, false, false, false];
  //   arr[index] = true;
  //   setColor(arr);
  // }

  return (
    <CrewContainer>
      <Profession>{member.profession}</Profession>
      <Name>{member.name}</Name>
      <Description>{member.description}</Description>

      <NavList>
        <li onClick={() => exactPosition(0, setColor, setPosition)}>
          <Circle cor={color[0]} />
        </li>
        <li onClick={() => exactPosition(1, setColor, setPosition)}>
          <Circle cor={color[1]} />
        </li>
        <li onClick={() => exactPosition(2, setColor, setPosition)}>
          <Circle cor={color[2]} />
        </li>
        <li onClick={() => exactPosition(3, setColor, setPosition)}>
          <Circle cor={color[3]} />
        </li>
      </NavList>

      <Imagem src={member.imagem} alt={member.name} />
    </CrewContainer>
  );
};

export default CrewSlide;
