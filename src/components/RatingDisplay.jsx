import React from "react";
import styled from "styled-components";

const Stars = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-around;
`;

const Star = styled.p`
  padding: 0.3rem;
  font-size: 3rem;
  text-align: center;
  color: white;
  background-color: darkblue;
`;

const RatingDisplay = (props) => {
  const totalStars = 5;

  return (
    <Stars>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i}>{i < props.starsSelected ? "\u2605" : "\u2606"}</Star>
      ))}
    </Stars>
  );
};

export default RatingDisplay;
