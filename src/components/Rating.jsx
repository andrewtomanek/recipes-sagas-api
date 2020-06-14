import React, { useState } from "react";
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

const Rating = (props) => {
  const [starsSelected, selectStar] = useState(0);
  const totalStars = 5;

  const setRating = (starId) => {
    selectStar(starId);
    props.updateRating(starId);
  };

  return (
    <Stars>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} onClick={() => setRating(i + 1)}>
          {i < starsSelected ? "\u2605" : "\u2606"}
        </Star>
      ))}
    </Stars>
  );
};

export default Rating;
