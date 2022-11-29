function Rating(props) {
  const stars = [];
  for (let i = 0; i < props.rate; i++) {
    stars.push(<img src={require("./../../img/star-filled.png")} alt="star" />);
  }
  for (let i = 0; i < 5 - props.rate; i++) {
    stars.push(
      <img src={require("./../../img/star-unfilled.png")} alt="star" />
    );
  }

  return <div className="rating">{stars}</div>;
}
export default Rating;
