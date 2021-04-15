import React, { useState } from "react";
import { LeftNav } from "./LeftNav";

export const Burger = () => {
  const [burger, setBurger] = useState(false);

  const toggle = () => setBurger(!burger);

  return (
    <div className="shadow">
        <div className={!burger ? "burger" : 'burger rota'} onClick={toggle}>
          <div className="slice"></div>
          <div className="slice"></div>
          <div className="slice"></div>
        </div>
      <LeftNav burger={burger} toggle={toggle} />
      
      </div>

  );
};
