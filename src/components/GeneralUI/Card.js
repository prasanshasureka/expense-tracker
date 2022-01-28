import "./Card.css";

const Card = (props) => {
  // to also add the className passed to Card in other components that use the Card,
  // along with the 'card' className
  const classes = "card " + props.className;

  // props.children is a something we get by default with props,
  // helps us set whatever is passed in between the
  // opening and closing tags of Card in other components
  return <div className={classes}>{props.children}</div>;
}

export default Card;
