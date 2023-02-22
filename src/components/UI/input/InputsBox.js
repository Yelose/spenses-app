import "./input.css";
export default function InputsBox(props) {
  const classes = `inputs-container ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}
