import React, { useState } from "react";

import { ContainerStyled, InnerContainer } from "./Crew.elements";

import { CrewSlide } from "../../components/index";

import crewData from "./crewMembers";

const Crew = () => {
  const [position, setPosition] = useState(0);

  return (
    <div>
      <ContainerStyled>
        <InnerContainer>
          <h2>
            <span>02</span> MEET YOUR CREW
          </h2>
          <CrewSlide member={crewData[position]} setPosition={setPosition} />
        </InnerContainer>
      </ContainerStyled>
    </div>
  );
};

export default Crew;
