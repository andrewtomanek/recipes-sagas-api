import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";

const Update = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          props.update([values, props.updateId]);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(20, "Please enter no more than 20 characters")
            .required("Please enter name"),
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
    update: state.update,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (inputData) => dispatch(actions.update(inputData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
