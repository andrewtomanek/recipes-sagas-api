import React, { useEffect } from "react";
import { useParams } from "react-router";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";
import Update from "../components/Update";
import Rating from "../components/Rating";
import RatingDisplay from "../components/RatingDisplay";
import styled from "styled-components";

export const PageLayout = styled.section`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  margin: 0;
  padding: 0rem 2rem;
  min-height: 80vh;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  margin: 0;
  padding: 1rem;
  width: 100%;
`;

export const HeaderBox = styled.header`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.3rem;
  width: 80vw;
`;

export const CoverPic = styled.img`
  width: 100%;
  padding: 0rem;
  margin: 0rem;
  padding: 0.1rem 0.3rem;
`;

export const BottomBox = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--purple);
  padding: 0.1rem 0.3rem;
`;

export const BasicHeading = styled.h3`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  border-radius: 0.3rem;
  background-color: var(--blue);
  color: white;
`;

export const SubHeading = styled.h2`
  padding: 0.1rem 0.3rem;
  font-size: 1.2rem;
  font-weight: 00;
  text-align: left;
  color: var(--blue);
`;

export const TextContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  width: 90%;
`;

export const BasicText = styled.p`
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
`;

export const TimeText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.1rem 0.2rem;
  text-align: center;
`;

export const UpdateBox = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.3rem;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  color: white;
  background-color: var(--blue);
`;

export const ListBox = styled.ul`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.3rem;
`;

const Detail = (props) => {
  const itemData = props.current;

  let { itemId } = useParams();

  useEffect(() => {
    !props.current && props.history.push(`/`);
  });

  const updateRating = (starId) => {
    props.postRating([starId, props.current.id]);
  };

  return (
    props.current && (
      <PageLayout>
        <CardContainer>
          <HeaderBox>
            <CoverPic src={process.env.PUBLIC_URL + "/food.png"} alt="food" />
            <BasicHeading> {itemData.name}</BasicHeading>
            <BottomBox>
              <RatingDisplay starsSelected={Math.round(props.current.score)} />
              <TimeText>{"\u{23F1}"}</TimeText>
              <TimeText>{itemData.duration}min. </TimeText>
            </BottomBox>
          </HeaderBox>
          <TextContainer>
            <BasicText BasicText>{itemData.description}</BasicText>
            <SubHeading>Ingredience</SubHeading>
            <ListBox>
              {itemData.ingredients.map((item, index) => (
                <li key={index}>
                  <BasicText>{item}</BasicText>
                </li>
              ))}
            </ListBox>
            <SubHeading>Příprava jídla</SubHeading>
            <BasicText>{itemData.info}</BasicText>
          </TextContainer>
          <UpdateBox>
            <Update updateId={itemData.id} />
            <BasicHeading>Ohodnoť tento recept</BasicHeading>
            <Rating
              updateRating={updateRating}
              starsSelected={Math.round(props.current.score)}
              currentId={itemData.id}
            />
          </UpdateBox>
        </CardContainer>
      </PageLayout>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    listData: state.listData,
    current: state.current,
    rating: state.rating,
    update: state.update,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadListData: () => dispatch(actions.loadListData()),
    fetchItem: (id) => dispatch(actions.fetchItem(id)),
    postRating: (inputData) => dispatch(actions.postRating(inputData)),
    update: (id) => dispatch(actions.update(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
