import React from "react";
import "./arrows.css";
import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";



function Arrows({
  handleScroll = () => {},
  scrollSize,
}) {



  const onClickLeft = () => {
    handleScroll((prevState) => prevState - scrollSize);

  };

  const onClickRight = () => {
    handleScroll((prevState) => prevState + scrollSize);
  };

  return (
    <div className="arrows-container">
      <img id="arrow-left"
        onClick={onClickLeft}
        src={arrowLeft}
        alt="left arrow"
      />
      <img id="arrow-right"
       
        onClick={onClickRight}
        src={arrowRight}
        alt="right arrow"
      />
    </div>
  );
}

export default Arrows;
