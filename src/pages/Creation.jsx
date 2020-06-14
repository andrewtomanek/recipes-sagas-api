import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";
import CustomIngredientInput from "../components/CustomIngredientInput";

const Creation = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
          ingredients: [
            {
              id: "asdfl123",
              name: "",
            },
          ],
          duration: 0,
          info: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          let removedIdValues = {
            ...values,
            ingredients: values.ingredients.map((item) => item.name),
          };
          props.create(removedIdValues);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(20, "Please enter no more than 20 characters")
            .required("Please enter name"),
          description: Yup.string()
            .min(5, "Please enter more than 5 characters")
            .required("Please enter description"),
          ingredients: Yup.array().min(
            2,
            "At least two ingredients are required"
          ),
          duration: Yup.number("Please enter number")
            .positive("Please enter positive number")
            .required("Please enter duration"),
          info: Yup.string()
            .min(3, "Please enter more than 3 characters")
            .required("Please enter information"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setTouched,
            setValues,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name"></label>
              <input
                id="name"
                placeholder="Please enter name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? "error" : ""}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}{" "}
              <input
                id="description"
                placeholder="Enter your description"
                type="text"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.description && touched.description ? "error" : ""
                }
              />
              {errors.description && touched.description && (
                <div className="input-feedback">{errors.description}</div>
              )}{" "}
              <input
                id="duration"
                placeholder="Enter  duration"
                type="number"
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.duration && touched.duration ? "error" : ""}
              />
              {errors.duration && touched.duration && (
                <div className="input-feedback">{errors.duration}</div>
              )}{" "}
              <input
                id="info"
                placeholder="Enter info"
                type="text"
                value={values.info}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.info && touched.info ? "error" : ""}
              />
              {errors.info && touched.info && (
                <div className="input-feedback">{errors.info}</div>
              )}
              {values.ingredients.map((ingredient) => (
                <CustomIngredientInput
                  key={ingredient.id}
                  values={values}
                  errors={errors}
                  touched={touched}
                  {...ingredient}
                  setTouched={setTouched}
                  setValues={setValues}
                  onChange={handleChange}
                />
              ))}
              {errors.ingredients && touched.ingredients && (
                <div className="input-feedback">{errors.ingredients}</div>
              )}{" "}
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    upload: state.upload,
    update: state.update,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    create: (id) => dispatch(actions.create(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Creation);
