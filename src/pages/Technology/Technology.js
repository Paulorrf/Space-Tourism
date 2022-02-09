import React, { useState } from "react";

import { TechnologySlide } from "../../components/index";

import { TechContainer } from "./Technology.elements";

//import crewData from "../Crew/crewMembers";
import techData from "./technologyShips.js";

const Technology = () => {
  const [position, setPosition] = useState(0);
  return (
    <TechContainer>
      <TechnologySlide
        techVehicle={techData[position]}
        setPosition={setPosition}
      />
    </TechContainer>
  );
};

export default Technology;
