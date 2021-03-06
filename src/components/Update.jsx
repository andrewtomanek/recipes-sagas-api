import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";
import { BasicButton } from "../styles/elements";
import styled from "styled-components";

const Update = (props) => {
  return (
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
          <FormContainer onSubmit={handleSubmit}>
            <InputLabel htmlFor="name"></InputLabel>
            <input
              id="name"
              placeholder="Please enter new name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? "error" : ""}
            />
            {errors.name && touched.name && (
              <ErrorText>{errors.name}</ErrorText>
            )}{" "}
            <ResetButton
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </ResetButton>
            <SearchButton type="submit" disabled={isSubmitting}>
              Submit
            </SearchButton>
          </FormContainer>
        );
      }}
    </Formik>
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

const FormContainer = styled.form`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  grid-gap: 0.2rem;
  padding: 0.1rem 0.5rem;
  width: 90vw;
`;

const InputLabel = styled.label`
  height: 100%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  color: grey;
`;

const SearchButton = styled(BasicButton)`
  font-size: 1rem;
  font-weight: 900;
  border-radius: 0.3rem;
  border: solid 0.1rem white;
  color: var(--blue);
`;

const ResetButton = styled(BasicButton)`
  font-size: 1rem;
  font-weight: 900;
  border-radius: 0.3rem;
  border: solid 0.1rem white;
  color: var(--blue);
`;

const ErrorText = styled.p`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  border-radius: 0.3rem;
  text-align: center;
  color: var(--red);
  height: 100%;
`;
