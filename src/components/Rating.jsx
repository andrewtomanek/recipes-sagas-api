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
  font-size: 2rem;
  text-align: center;
  font-weight: 900;
  color: white;
`;

const Rating = (props) => {
  const [starsSelected, selectStar] = useState(+props.starsSelected);
  const [voted, setVoted] = useState(false);
  const totalStars = 5;

  const setRating = (starId) => {
    setVoted(true);
    let votedOnce = localStorage.getItem(props.currentId);
    if (!voted && !votedOnce) {
      localStorage.setItem(props.currentId, JSON.stringify("voted"));
      selectStar(starId);
      props.updateRating(starId);
    }
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
