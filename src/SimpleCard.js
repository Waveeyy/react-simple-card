import React from "react";
import Title from "./Title.js";
import Description from "./Description.js";
import IMG from "./IMG.js";

function SimpleCard() {
  return (
    <div className="card">
      <Title title="A Title" />
      <Description description="the description goes here" />
      <IMG img="IMG" />
    </div>
  );
}

export default SimpleCard;
