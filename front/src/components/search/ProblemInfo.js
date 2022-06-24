import TierImage from "../TierImage";

export default function ProblemInfo(props) {
  return (
    <tr>
      <td>{props.problem.problemId}</td>
      <td>
        <TierImage tier={props.problem.level} width={30} />
      </td>
      <td>{props.problem.titleKo}</td>
      <td>{props.problem.acceptedUserCount}</td>
      <td>{props.problem.averageTries}</td>
    </tr>
  );
}
