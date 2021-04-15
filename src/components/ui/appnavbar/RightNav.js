import React from "react";
import sad from "../../../images/sad day.png";

export const RightNav = ({ bag, toggle }) => {
  return (
    <div className={!bag ? "rightNav-Container" : "rightNav-Container checker"}>
      <div className={!bag ? "rightNav" : "rightNav checker"}>
        <div className="bag-Header">
          <h4>
            Bag <span>0</span>{" "}
          </h4>
        </div>
        <img src={sad} alt="Empty" />
        <h5>It's empty here</h5>
        <p>Start shopping to add items to your bag</p>
      </div>
      <div className="bg" onClick={toggle}></div>
    </div>
  );
};
