import PropsTypes from "prop-types";

const propsType = {
  active: PropsTypes.bool,
  onClick: PropsTypes.func,
};

const defaultProps = {
  active: false,
  onClick: () => console.error("FilterButton에 onClick 을 넘겨주세요."),
};

export default function FilterButton(props) {
  const activeClass = `opacity-${props.active ? "100" : "25"}`;

  return (
    <button className={`btn ${activeClass} w-75`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

FilterButton.prototype = propsType;
FilterButton.defaultProps = defaultProps;
