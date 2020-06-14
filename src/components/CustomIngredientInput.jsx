import React from "react";
import uuid from "uuid";

const CustomIngredientInput = (props) => {
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
    <div>
      <label htmlFor={props.id + "-name"}>Name</label>
      <input
        type="text"
        id={props.id + "-name"}
        name="name"
        value={props.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="button" onClick={removeIngredient}>
        X
      </button>
      <button type="button" onClick={addIngredientBelow}>
        +
      </button>
    </div>
  );
};

export default CustomIngredientInput;
