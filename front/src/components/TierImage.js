import PropsTypes from "prop-types";

const propTypes = {
  tier: PropsTypes.number,
  width: PropsTypes.number,
};

const defaultProps = {
  tier: 0,
  width: 100,
};

export default function TierImage(props) {
  return (
    <img
      style={{ width: `${props.width}px` }}
      src={`https://d2gd6pc034wcta.cloudfront.net/tier/${props.tier}.svg`}
      alt="tier"
    />
  );
}

TierImage.prototype = propTypes;
TierImage.defaultProps = defaultProps;
