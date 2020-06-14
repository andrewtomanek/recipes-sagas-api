import React, { useEffect } from "react";
import { useParams } from "react-router";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";
import Update from "../components/Update";
import Rating from "../components/Rating";
import RatingDisplay from "../components/RatingDisplay";

const Detail = (props) => {
  let { itemId } = useParams();

  useEffect(() => {
    !props.current && props.history.push(`/`);
  });

  const updateRating = (starId) => {
    props.postRating([starId, props.current.id]);
  };

  return (
    props.current && (
      <>
        {itemId}
        <ul key={props.current.id}>
          <li>
            <img src={process.env.PUBLIC_URL + "/time.png"} alt="food" />
          </li>
          <li> {props.current.name}</li>
          <li>
            {" "}
            <RatingDisplay starsSelected={props.current.score} />
          </li>
          <li>{props.current.duration}</li>
          <li>{props.current.description}</li>
          <li className="output">
            <ul>
              {props.current.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
          <li>{props.current.info}</li>
          <li>{props.current.id}</li>
          <li>
            <Update updateId={props.current.id} />
          </li>
          <li>
            <Rating updateRating={updateRating} />
          </li>
        </ul>
        <div className="output">{JSON.stringify(props.current, null, 2)}</div>
      </>
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
