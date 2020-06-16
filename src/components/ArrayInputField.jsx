import React from "react";
import uuid from "uuid";
import { GridBox, InputBox, BasicButton } from "../styles/elements";
import styled from "styled-components";

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
    <InputElement>
      <InputField
        type="text"
        id={props.id + "-name"}
        name="name"
        placeholder="Vaše ingredience"
        value={props.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputButton type="button" onClick={removeIngredient}>
        x Odebrat
      </InputButton>
      <InputButton type="button" onClick={addIngredientBelow}>
        + Přidat
      </InputButton>
    </InputElement>
  );
};

export default ArrayInputField;

const InputElement = styled(GridBox)`
  grid-auto-flow: column;
  align-content: space-around;
  padding: 0.1rem 0.5rem;
  grid-gap: 0.2rem 2rem;
`;

const InputField = styled(InputBox)`
  font-size: 1rem;
  font-weight: 700;
`;

const InputButton = styled(BasicButton)`
  font-size: 0.9rem;
  font-weight: 900;
  color: var(--purple);
  background-color: #fff;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--purple);
  &:hover {
    color: var(--blue);
  }
`;
