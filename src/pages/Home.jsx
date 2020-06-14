import React, { useState, useEffect } from "react";
import { actions } from "../store/actions/actions";
import { connect } from "react-redux";
import RatingDisplay from "../components/RatingDisplay";

const Home = (props) => {
  const [listData, setListData] = useState([]);
  const [pickedId, setPickedId] = useState(null);
  const [picked, setPicked] = useState(false);

  useEffect(() => {
    props.loadListData();
    setListData(props.listData);
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
    <>
      <div className="output">{JSON.stringify(props.listData, null, 2)}</div>
      <div className="output">{JSON.stringify(props.deleted, null, 2)}</div>
      <div className="output">{JSON.stringify(listData, null, 2)}</div>
      <ul>
        {props.listData &&
          props.listData.length > 0 &&
          props.listData.map((item) => {
            return (
              <li key={item.id}>
                <ul>
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "/food.png"}
                      alt="food"
                    />
                  </li>
                  <li> {item.name}</li>
                  <li>{item.duration}</li>
                  <li>
                    <img
                      src={process.env.PUBLIC_URL + "/time.png"}
                      alt="food"
                    />
                  </li>
                  <RatingDisplay starsSelected={item.score} />
                </ul>
                <button onClick={() => openDetail(item.id)}>pick</button>{" "}
                <button onClick={() => props.remove(item.id)}>remove</button>{" "}
              </li>
            );
          })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    listData: state.listData,
    current: state.current,
    rating: state.rating,
    deleted: state.deleted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadListData: () => dispatch(actions.loadListData()),
    fetchItem: (id) => dispatch(actions.fetchItem(id)),
    remove: (id) => dispatch(actions.remove(id)),
    postRating: (inputData) => dispatch(actions.postRating(inputData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
