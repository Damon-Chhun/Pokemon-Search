import React from "react";
import Card from "./Card";

const CardArray = ({ amiibos }) => {
  return (
    <div>
      {amiibos.map(amiibos => {
        return (
          <Card
            name={amiibos.name}
            gameSeries={amiibos.gameSeries}
            amiiboSeries={amiibos.amiiboSeries}
          />
        );
      })}
    </div>
  );
};

export default CardArray;
