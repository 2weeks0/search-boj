import PropsTypes from "prop-types";

import TierImage from "../TierImage";

const propsTypes = {
  problem: PropsTypes.object,
};

export default function ProblemInfo(props) {
  return (
    <>
      <td>{props.problem.problemId}</td>
      <td>
        <TierImage tier={props.problem.level} width={30} />
      </td>
      <td>{props.problem.titleKo}</td>
      <td>{props.problem.acceptedUserCount}</td>
      <td>{props.problem.averageTries}</td>
    </>
  );
}

ProblemInfo.propsTypes = propsTypes;