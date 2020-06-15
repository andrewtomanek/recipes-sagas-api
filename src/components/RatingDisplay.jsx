import React from "react";
import { Stars } from "../styles/elements";
import styled from "styled-components";

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

const Star = styled.p`
  padding: 0rem 0.3rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
  color: white;
  background-color: var(--purple);
`;
