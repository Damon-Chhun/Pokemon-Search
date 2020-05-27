import React from "react";

const Card = ({ name, gameSeries, amiiboSeries }) => {
  return (
    <div className="cards">
      <img alt="picture" src={this.prop.amiibo.image} />
      <div>
        <h2>{name}</h2>
        <p> {gameSeries}</p>
        <p>{amiiboSeries}</p>
      </div>
    </div>
  );
};

export default Card;
