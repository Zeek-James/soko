import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { RightNav } from "./RightNav";

export const Bag = () => {
  const [bag, setBag] = useState(false);

  const toggle = () => setBag(!bag);

  const barg = (
    <div className='barg'>

    <FontAwesomeIcon icon="shopping-bag" onClick={toggle} className="fa-2x" /><span>0</span>
    </div>
  );

  const close = (
    <FontAwesomeIcon icon='window-close' onClick={toggle} className="fa-2x" />
  )

  return (
    <div className="bag-Container">
      <div className={!bag ? "bag" : " bag checker"}>
        {!bag ? barg : close}
      </div>
      <RightNav bag={bag} toggle={toggle} />
    </div>
  );
};
