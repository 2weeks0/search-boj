import PropsTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addTeammate, removeTeammate } from "../../store/slices/teamSlice";

import TierImage from "../TierImage";

const propTypes = {
  user: PropsTypes.object,
  isTeammate: PropsTypes.bool,
};

const defaultProps = {
  isTeammate: false,
};

export default function UserInfo(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(props.isTeammate ? removeTeammate(props.user) : addTeammate());
  };

  return props.user ? (
    <div style={props.style}>
      <h3>{props.user.handle}</h3>
      <TierImage tier={props.user.tier} />
      <br />
      <button onClick={handleClick}>{props.isTeammate ? "팀원 해제" : "팀원 등록"}</button>
    </div>
  ) : props.user === undefined ? null : (
    <h5>존재하지 않는다.</h5>
  );
}

UserInfo.prototype = propTypes;
UserInfo.defaultProps = defaultProps;
