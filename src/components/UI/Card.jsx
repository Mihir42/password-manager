import PropTypes from "prop-types";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="cardTitle">{props.title}</div>
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
