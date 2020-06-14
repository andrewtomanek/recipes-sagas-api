import React from "react";
import styled from "styled-components";

const Stars = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;

const Star = styled.p`
  padding: 0.3rem;
  font-size: 1rem;
  text-align: center;
  font-weight: 900;
  color: var(--purple);
`;

const StarsDisplay = (props) => {
  const totalStars = 5;

  return (
    <Stars>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i}>{i < props.starsSelected ? "\u2605" : "\u2606"}</Star>
      ))}
    </Stars>
  );
};

export default StarsDisplay;
