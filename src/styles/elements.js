import styled from "styled-components";

export const BasicButton = styled.button`
  padding: 0.3rem 1rem;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--purple);
  }
`;

export const GridBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0rem;
`;

export const FormBox = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
`;

export const InputBox = styled.input`
  margin: 0;
  padding: 0.1rem 0.3rem;
  text-align: center;
  background-color: #fff;
  outline: none;
`;

export const LabelText = styled.label`
  height: 100%;
  margin: 0;
  padding: 0.1rem 0.3rem;
`;

export const ErrorText = styled.p`
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

export const Stars = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-around;
`;
