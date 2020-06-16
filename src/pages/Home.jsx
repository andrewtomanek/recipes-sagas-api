import React, { useState, useEffect } from "react";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";
import StarsDisplay from "../components/StarsDisplay";
import { GridBox, BasicButton } from "../styles/elements";
import styled from "styled-components";

const Home = (props) => {
  const [pickedId, setPickedId] = useState(null);
  const [picked, setPicked] = useState(false);

  useEffect(() => {
    props.loadListData();
  }, []);

  useEffect(() => {
    picked && props.current && props.history.push(`/detail/${pickedId}`);
    setPicked(true);
  }, [props.current]);

  const openDetail = (id) => {
    props.fetchItem(id);
    setPickedId(id);
  };

  return (
    <PageLayout>
      {props.listData &&
        props.listData.length > 0 &&
        props.listData.map((item) => {
          return (
            <ArticleWrap key={item.id}>
              <CoverPic
                src={process.env.PUBLIC_URL + "/food.png"}
                alt={item.name}
              />
              <ContentBox>
                <DetailButton onClick={() => openDetail(item.id)}>
                  {" "}
                  {item.name}
                </DetailButton>
                <StarsDisplay starsSelected={Math.round(item.score)} />
                <BottomBox>
                  <TimeBox>
                    <TimeText> {"\u{23F1}"}</TimeText>
                    <TimeText>{item.duration} min.</TimeText>
                  </TimeBox>
                  <RemoveButton onClick={() => props.remove(item.id)}>
                    {"\u{274C}"}
                  </RemoveButton>{" "}
                </BottomBox>
              </ContentBox>
            </ArticleWrap>
          );
        })}
    </PageLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    listData: state.listData,
    current: state.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadListData: () => dispatch(actions.loadListData()),
    fetchItem: (id) => dispatch(actions.fetchItem(id)),
    remove: (id) => dispatch(actions.remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const PageLayout = styled(GridBox)`
  grid-auto-flow: row;
  height: 100%;
  padding: 2rem 1rem;
`;

const ArticleWrap = styled.article`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 100%;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid lightgrey;
`;

export const DetailButton = styled(BasicButton)`
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--blue);
`;

export const RemoveButton = styled(BasicButton)`
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--blue);
`;

export const ContentBox = styled(GridBox)`
  grid-auto-flow: row;
  padding: 0.1rem 0.3rem;
  width: 50vw;
`;

export const BottomBox = styled(GridBox)`
  grid-auto-flow: column;
  padding: 0.1rem 0.3rem;
`;

export const TimeBox = styled(GridBox)`
  grid-auto-flow: column;
  padding: 0.1rem 0.3rem;
`;

export const CoverPic = styled.img`
  height: 15vh;
  padding: 1rem;
`;

export const TimeText = styled.p`
  color: darkgrey;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.1rem 0.5rem;
  margin: 0rem;
  text-align: left;
  text-decoration: none;
  border-radius: 1rem;
`;
