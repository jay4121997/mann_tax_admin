import React from "react";
import { Link } from "react-router-dom";
import "./ViewCard.css";

const ViewCard = (props) => {
  let { myKey } = props;
  return (
    <div id={props.keyValue}>
      <div className="card">
        <Link to={`/news/${myKey}`}>
          <h1>{props.title}</h1>
        </Link>
        <p>Author Name: {props.author}</p>
        <p>Created On: {props.created}</p>
        <div className="buttons">
          <button className="delete" onClick={props.clicked}>
            DELETE
          </button>
          <Link to={`/update/${myKey}`}>
          <button className="update">
            UPDATE
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
