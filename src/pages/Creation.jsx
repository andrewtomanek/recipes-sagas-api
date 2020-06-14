import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";
import ArrayInputField from "../components/ArrayInputField";
import styled from "styled-components";

const PageLayout = styled.section`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  grid-gap: 2rem;
  padding: 1rem 0.5rem;
`;

export const InputField = styled.input`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: #fff;
  outline: none;
`;

export const InputLabel = styled.label`
  height: 100%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  color: grey;
`;

export const SubHeading = styled.h2`
  padding: 0.1rem 0.3rem;
  font-size: 1.2rem;
  font-weight: 00;
  text-align: left;
  color: var(--blue);
`;

export const BasicButton = styled.button`
  padding: 0.3rem 1rem;
  font-size: 1.2rem;
  font-weight: 900;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--purple);
  }
`;

const SearchButton = styled(BasicButton)`
  border: solid 0.1rem white;
  border-radius: 0.3rem;
  color: var(--blue);
`;

const ResetButton = styled(BasicButton)`
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

const Creation = (props) => {
  return (
    <PageLayout>
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
            <FormContainer onSubmit={handleSubmit}>
              <InputLabel htmlFor="name">Název receptu</InputLabel>
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
                <ErrorText>{errors.name}</ErrorText>
              )}{" "}
              <InputLabel htmlFor="description">Úvodní text</InputLabel>
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
                <ErrorText>{errors.description}</ErrorText>
              )}{" "}
              <SubHeading>Ingredience</SubHeading>
              {values.ingredients.map((ingredient) => (
                <ArrayInputField
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
                <ErrorText>{errors.ingredients}</ErrorText>
              )}{" "}
              <InputLabel htmlFor="info">Postup</InputLabel>
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
                <ErrorText>{errors.info}</ErrorText>
              )}
              <InputLabel htmlFor="duration">Čas</InputLabel>
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
                <ErrorText>{errors.duration}</ErrorText>
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
    </PageLayout>
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
