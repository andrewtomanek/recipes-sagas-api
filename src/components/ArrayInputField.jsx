import React from "react";
import uuid from "uuid";
import styled from "styled-components";

export const InputBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  padding: 0.1rem 0.5rem;
  grid-gap: 0.2rem 2rem;
`;

export const InputButton = styled.button`
  padding: 0.3rem 0.1rem;
  font-size: 0.9rem;
  font-weight: 900;
  color: var(--purple);
  background-color: #fff;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--purple);
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--blue);
  }
`;

export const InputLabel = styled.label`
  height: 100%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  color: var(--purple);
`;

const ArrayInputField = (props) => {
  const addIngredientBelow = () => {
    const ingredients = props.values.ingredients;
    ingredients.splice(
      props.values.ingredients.findIndex((p) => p.id === props.id) + 1,
      0,
      {
        id: uuid.v4(),
        name: "",
      }
    );
    props.setValues({
      ...props.values,
      ingredients,
    });
  };

  const removeIngredient = () => {
    props.setValues({
      ...props.values,
      ingredients: props.values.ingredients.filter(
        (ingredient) => ingredient.id !== props.id
      ),
    });
  };

  const handleChange = (e) => {
    const newIngredients = props.values.ingredients;
    newIngredients.find((p) => p.id === props.id)[e.target.name] =
      e.target.value;
    props.setValues({
      ...props.values,
      newIngredients,
    });
    props.onChange("ingredients", newIngredients);
  };

  const handleBlur = (e) => {
    props.setTouched({
      ...props.touched,
      ingredients: true,
    });
  };

  return (
    <InputBox>
      <input
        type="text"
        id={props.id + "-name"}
        name="name"
        placeholder="Vaše ingredience"
        value={props.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputButton type="button" onClick={removeIngredient}>
        X Odebrat
      </InputButton>
      <InputButton type="button" onClick={addIngredientBelow}>
        + Přidat
      </InputButton>
    </InputBox>
  );
};

export default ArrayInputField;
